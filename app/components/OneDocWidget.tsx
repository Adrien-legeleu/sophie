import { useEffect } from 'react';

export default function OneDocWidget() {
  useEffect(() => {
    // Insère le script dynamiquement côté client
    const script = document.createElement('script');
    script.innerHTML = `
      var widgetConfigs=widgetConfigs||{};
      widgetConfigs["6de1a481bfba6b7bbade0dce922cea29cb65cfcbd7bb3644d0210c4c4f3d2058"]={};
      widgetConfigs["6de1a481bfba6b7bbade0dce922cea29cb65cfcbd7bb3644d0210c4c4f3d2058"].measurementIds=[];
      widgetConfigs["6de1a481bfba6b7bbade0dce922cea29cb65cfcbd7bb3644d0210c4c4f3d2058"].hasGoogleTagTracking=!1;
      widgetConfigs["6de1a481bfba6b7bbade0dce922cea29cb65cfcbd7bb3644d0210c4c4f3d2058"].hasFusedeck=!1;
      window.addEventListener("message",function(e){
        var t=e.data["od-widget-id"],
            i=e.data["od-widget-height"],
            d=e.data["od-widget-ios"];
        if(t && t in widgetConfigs && "6de1a481bfba6b7bbade0dce922cea29cb65cfcbd7bb3644d0210c4c4f3d2058"===t){
          var a=document.getElementById("od-widget-"+t);
          i&&(a.style.height=i+"px"),
          !0===d&&(a.style.width="100px",a.style["min-width"]="100%",a.scrolling="no");
          var g=e.data["od-tracking-configs"];
          void 0!==g&&(widgetConfigs[t].measurementIds=g);
          var o=e.data["od-has-google-tag-manager"];
          void 0!==o&&(widgetConfigs[t].hasGoogleTagTracking=o);
          var f=e.data["od-has-fusedeck"];
          void 0!==f&&(widgetConfigs[t].hasFusedeck=f);
          var n=e.data.GA4;
          if(widgetConfigs[t].hasGoogleTagTracking&&window.dataLayer&&n){
            var s=Object.keys(n.properties),r={event:n.name};
            s.forEach(function(e){r[e]=n.properties[e]}),
            dataLayer.push(r)
          }
          if(widgetConfigs[t].hasFusedeck&&window.fdData&&n){
            var s=Object.keys(n.properties),r={event:n.name};
            s.forEach(function(e){r[e]=n.properties[e]}),
            fdData.push(r)
          }
          if(n&&void 0!==window.gtag)
            for(var w=0;w<widgetConfigs[t].measurementIds.length;w++){
              var f=widgetConfigs[t].measurementIds[w],
                  c=(s=Object.keys(n.properties),{send_to:f});
              s.forEach(function(e){c[e]=n.properties[e]}),
              gtag("event",n.name,c)
            }
        }
      });
      window.addEventListener("load",function(e){
        for(var t=document.querySelectorAll("iframe.od-widget"),i=0;i<t.length;i++){
          var d=t[i];
          d.dataset&&d.dataset.src&&(d.src=d.dataset.src)
        }
      });
    `;
    document.body.appendChild(script);

    const timeout = setTimeout(() => {
      const iframes = document.querySelectorAll('iframe.od-widget');
      iframes.forEach((iframe) => {
        if (
          iframe instanceof HTMLIFrameElement &&
          iframe.dataset.src &&
          iframe.src === 'about:blank'
        ) {
          iframe.src = iframe.dataset.src;
        }
      });
    }, 500);

    // Cleanup on unmount
    return () => {
      document.body.removeChild(script);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <iframe
      className="od-widget"
      id="od-widget-6de1a481bfba6b7bbade0dce922cea29cb65cfcbd7bb3644d0210c4c4f3d2058"
      src="about:blank"
      data-src="https://onedoc.ch/fr/widget/6de1a481bfba6b7bbade0dce922cea29cb65cfcbd7bb3644d0210c4c4f3d2058"
      frameBorder="0"
      style={{
        width: '100%',
        maxWidth: '1024px',
        height: '400px',
      }}
      allow="clipboard-write"
    />
  );
}
