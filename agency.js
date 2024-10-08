
import Spline from '@splinetool/react-spline';

export default function App() {
  return (
    <Spline scene="https://prod.spline.design/50EnARDQ50U0MP5k/scene.splinecode" />
  );
}
document.addEventListener('DOMContentLoaded', function () {
    const animation4 = document.getElementById('animation4');
  
    function loadSpline() {
      const script = document.createElement('script');
      script.type = 'module';
      script.src = 'https://unpkg.com/@splinetool/viewer@0.9.240/build/spline-viewer.js';
      document.body.appendChild(script);
  
      // Once the script is loaded, add the Spline animation
      script.onload = function () {
        const splineViewer = document.createElement('spline-viewer');
        splineViewer.setAttribute('url', 'https://prod.spline.design/50EnARDQ50U0MP5k/scene.splinecode');
        splineViewer.style.width = '100%';
        splineViewer.style.height = '100vh';
        animation4.appendChild(splineViewer);
      };
    }
  
    // Trigger loading when "animation 4" is in view or interacted with
    window.addEventListener('scroll', function () {
      const rect = animation4.getBoundingClientRect();
      if (rect.top <= window.innerHeight && rect.bottom >= 0) {
        loadSpline();
        // Remove event listener after the Spline is loaded
        window.removeEventListener('scroll', arguments.callee);
      }
    });
  });
  