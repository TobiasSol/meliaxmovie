import Script from 'next/script';

export default function AdBannerSidebar() {
  return (
    <div className="w-full bg-gray-900 rounded-lg p-4 mt-auto">
      <div id="sidebar-banner-container" className="flex justify-center">
        <div className="bg-gray-800 rounded-lg p-4 w-full">
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm font-medium text-red-500">Advertisement</span>
            <span className="text-xs text-gray-400">Sponsored</span>
          </div>
          
          {/* Placeholder für den tatsächlichen Ad Content */}
          <div className="bg-gray-700 rounded-lg h-[250px] flex items-center justify-center">
            <span className="text-gray-400">Ad Space</span>
          </div>
          
          <div className="mt-4 text-xs text-gray-400 text-center">
            Advertisement by ExoClick
          </div>
        </div>
      </div>
      
      <Script
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            var ad_idzone = "4996404",
            ad_width = "300",
            ad_height = "250",
            v_pos = "bottom",
            h_pos = "left";
          `
        }}
      />
      <Script
        strategy="afterInteractive"
        src="https://a.exdynsrv.com/js.js"
      />
    </div>
  );
} 