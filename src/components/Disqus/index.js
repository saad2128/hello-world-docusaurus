import React, { useEffect } from 'react';

const DisqusComments = () => {
  useEffect(() => {
    // RECOMMENDED CONFIGURATION VARIABLES: EDIT AND UNCOMMENT THE SECTION BELOW TO INSERT DYNAMIC VALUES FROM YOUR PLATFORM OR CMS.
    // LEARN WHY DEFINING THESE VARIABLES IS IMPORTANT: https://disqus.com/admin/universalcode/#configuration-variables

    // Replace PAGE_URL and PAGE_IDENTIFIER with your page's canonical URL and unique identifier variables
    // const PAGE_URL = "YOUR_PAGE_URL";
    // const PAGE_IDENTIFIER = "YOUR_PAGE_IDENTIFIER";

    /**
     * Set up Disqus configuration
     */
    const disqus_config = function () {
      this.page.url = PAGE_URL;  // Replace PAGE_URL with your page's canonical URL variable
      this.page.identifier = PAGE_IDENTIFIER; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
    };

    // Load Disqus script dynamically
    (function () {
      const d = document;
      const s = d.createElement('script');
      s.src = 'https://saadaslam.disqus.com/embed.js';
      s.setAttribute('data-timestamp', +new Date());
      (d.head || d.body).appendChild(s);
    })();

    // Cleanup Disqus on component unmount
    return () => {
      const disqusThread = document.getElementById('disqus_thread');
      if (disqusThread) {
        disqusThread.innerHTML = ''; // Clear the Disqus thread to avoid interference with other components
      }
    };
  }, []); // Run this effect only once on component mount

  return (
    <div>
      <div id="disqus_thread"></div>
      <noscript>Please enable JavaScript to view the <a href="https://disqus.com/?ref_noscript">comments powered by Disqus.</a></noscript>
    </div>
  );
};

export default DisqusComments;
