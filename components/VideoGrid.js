import { useState, useRef } from 'react';
import Image from 'next/image';
import { Play, Eye, Pause, FastForward, X } from 'lucide-react';

export default function VideoGrid({ videos }) {
  const [hoveredVideo, setHoveredVideo] = useState(null);
  const [activeVideo, setActiveVideo] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [videoDurations, setVideoDurations] = useState({});
  const [playbackSpeed, setPlaybackSpeed] = useState(1);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [showEndModal, setShowEndModal] = useState(false);
  const [email, setEmail] = useState('');

  const videoRef = useRef(null);


// Füge den Authorization Header hinzu
const fetchVideos = async () => {
  try {
    const token = localStorage.getItem('adminToken');
    const response = await fetch('/api/admin/videos', {
      headers: {
        'Authorization': `Bearer ${token}`  // Füge den Token hinzu
      }
    });
    if (response.ok) {
      const data = await response.json();
      setVideos(data);
    }
  } catch (error) {
    console.error('Error fetching videos:', error);
  } finally {
    setLoading(false);
  }
};






  const handleVideoClick = (video, event) => {
    event.stopPropagation();
    
    if (activeVideo?.id === video.id) {
      if (isPlaying) {
        videoRef.current?.pause();
      } else {
        videoRef.current?.play();
      }
      setIsPlaying(!isPlaying);
    } else {
      setActiveVideo(video);
      setIsPlaying(true);
      setTimeout(() => {
        videoRef.current?.play();
      }, 0);
    }
  };

  const handleLoadedMetadata = (videoId, e) => {
    const videoDuration = Math.round(e.target.duration * 12);
    const minutes = Math.floor(videoDuration / 60);
    const seconds = videoDuration % 60;
    const formattedDuration = `${minutes}:${seconds.toString().padStart(2, '0')}`;
    setVideoDurations(prev => ({
      ...prev,
      [videoId]: formattedDuration
    }));
    setDuration(e.target.duration);
  };

  const toggleSpeed = (e) => {
    e.stopPropagation();
    const newSpeed = playbackSpeed === 1 ? 2 : 1;
    setPlaybackSpeed(newSpeed);
    if (videoRef.current) {
      videoRef.current.playbackRate = newSpeed;
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime);
    }
  };

  const handleSeek = (e) => {
    e.stopPropagation();
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = x / rect.width;
    const newTime = percentage * duration;
    if (videoRef.current) {
      videoRef.current.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };

  const handleVideoEnd = () => {
    setShowEndModal(true);
    setIsPlaying(false);
  };

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    console.log('Email submitted:', email);
    setShowEndModal(false);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {videos.map((video) => (
        <div
          key={video.id}
          className="group cursor-pointer"
          onMouseEnter={() => setHoveredVideo(video.id)}
          onMouseLeave={() => setHoveredVideo(null)}
        >
          {/* Video Thumbnail Container */}
          <div className="relative aspect-[16/12] rounded-lg overflow-hidden mb-3">
            {activeVideo?.id === video.id ? (
              <video
                ref={videoRef}
                src={video.video_url}
                controls={false}
                autoPlay={isPlaying}
                className="absolute inset-0 w-full h-full object-cover"
                onClick={(e) => handleVideoClick(video, e)}
                onLoadedMetadata={(e) => handleLoadedMetadata(video.id, e)}
                onTimeUpdate={handleTimeUpdate}
                onEnded={handleVideoEnd}
                playbackRate={playbackSpeed}
              />
            ) : hoveredVideo === video.id && video.preview_url ? (
              <video
                src={video.preview_url}
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
              />
            ) : video.video_url && !video.thumbnail_url ? (
              <video
                src={video.video_url}
                controls={false}
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
                onLoadedMetadata={(e) => handleLoadedMetadata(video.id, e)}
              />
            ) : (
              <Image
                src={video.thumbnail_url || "/videos/placeholder.jpg"}
                alt={video.title}
                fill
                className="object-cover transition-transform duration-200 group-hover:scale-105"
              />
            )}
            
            {/* Play/Pause Button mit lokalem Overlay */}
            <div 
              className="absolute inset-0 flex items-center justify-center"
              onClick={(e) => handleVideoClick(video, e)}
            >
              <div className={`w-24 h-24 rounded-full flex items-center justify-center ${!isPlaying ? 'bg-black bg-opacity-50' : 'bg-transparent group-hover:bg-black group-hover:bg-opacity-50'} transition-opacity duration-300`}>
                <button className={`transition-all duration-300 ${!isPlaying || (activeVideo?.id !== video.id) ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}>
                  {activeVideo?.id === video.id && isPlaying ? (
                    <Pause className="h-16 w-16 text-white" />
                  ) : (
                    <Play className="h-16 w-16 text-white" />
                  )}
                </button>
              </div>
            </div>
            
            {/* View Count */}
            <div className="absolute bottom-3 right-3 bg-black bg-opacity-75 px-3 py-1 rounded-full text-sm text-white flex items-center gap-1">
              <Eye size={16} />
              {video.views}K
            </div>

            {/* Duration */}
            {videoDurations[video.id] && (
              <div className="absolute bottom-3 left-3 bg-black bg-opacity-75 px-3 py-1 rounded-full text-sm text-white">
                {videoDurations[video.id]}
              </div>
            )}

            {activeVideo?.id === video.id && (
              <div 
                className="absolute top-3 right-3 bg-black bg-opacity-75 rounded-full p-2 cursor-pointer hover:bg-opacity-90"
                onClick={toggleSpeed}
              >
                <FastForward 
                  className={`h-6 w-6 text-white ${playbackSpeed === 2 ? 'text-red-500' : 'text-white'}`}
                />
                <span className="absolute -bottom-5 left-1/2 transform -translate-x-1/2 text-[10px] font-bold bg-black bg-opacity-75 px-2 py-1 rounded-full">
                  {playbackSpeed}x
                </span>
              </div>
            )}

            {activeVideo?.id === video.id && (
              <div 
                className="absolute bottom-0 left-0 right-0 h-2 bg-gray-800 cursor-pointer group"
                onClick={handleSeek}
              >
                <div 
                  className="absolute h-full bg-red-500 transition-all duration-100"
                  style={{ width: `${(currentTime / duration) * 100}%` }}
                />
                <div 
                  className="absolute h-4 w-4 bg-red-500 rounded-full -top-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                  style={{ left: `${(currentTime / duration) * 100}%`, transform: 'translateX(-50%)' }}
                />
              </div>
            )}
          </div>

          {/* Video Info */}
          <div className="px-2">
            <h3 className="text-red-500 text-xl font-bold leading-tight mb-2 drop-shadow-[0_1px_1px_rgba(255,255,255,0.5)]">
              {video.title}
            </h3>
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <span className="font-medium">{video.author}</span>
              <span>•</span>
              <span>{video.views}K views</span>
              <span>•</span>
              <span>{video.uploadedAt}</span>
            </div>
            <p className="text-gray-400 text-sm mt-2 line-clamp-2">
              {video.description}
            </p>
          </div>
        </div>
      ))}
      {showEndModal && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-gray-900 p-8 rounded-lg max-w-md w-full mx-4 relative">
            <button 
              onClick={() => setShowEndModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white"
            >
              <X size={24} />
            </button>
            
            <h2 className="text-2xl font-bold text-white mb-4">
              Möchten Sie das komplette Video sehen?
            </h2>
            
            <p className="text-gray-300 mb-6">
              Registrieren Sie sich jetzt und hinterlegen Sie Ihre E-Mail-Adresse, um Zugang zum vollständigen Video zu erhalten.
            </p>
            
            <form onSubmit={handleEmailSubmit} className="space-y-4">
              <div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Ihre E-Mail-Adresse"
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-red-500"
                  required
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition-colors duration-200"
              >
                Jetzt registrieren
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}