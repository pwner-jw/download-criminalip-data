(function downloadAllBlockInfo() {
  const blocks = document.querySelectorAll('[class*="BannerListItem__ItemWrap"]');
  let allContent = '';

  blocks.forEach((block, index) => {
    const lines = block.innerText.trim().split('\n').filter(Boolean);
    
    allContent += `======================\n`;
    allContent += `🚩 Block ${index + 1}\n`;
    allContent += `======================\n`;

    let currentSection = '';

    lines.forEach((line) => {
      const trimmedLine = line.trim();

      // Detect new sections by keywords
      if (/^\d{1,3}(\.\d{1,3}){3}:\d+/.test(trimmedLine)) {
        currentSection = 'IP Information';
        allContent += `\n🌐 ${currentSection}:\n`;
      } else if (trimmedLine.includes('SSL Certificate')) {
        currentSection = 'SSL Certificate';
        allContent += `\n🔒 ${currentSection}:\n`;
      } else if (trimmedLine.includes('HTTP/') || trimmedLine.includes('Content-Type') || trimmedLine.startsWith('Server:') || trimmedLine.startsWith('Set-Cookie')) {
        if (currentSection !== 'HTTP Headers') {
          currentSection = 'HTTP Headers';
          allContent += `\n📦 ${currentSection}:\n`;
        }
      }

      allContent += `  • ${trimmedLine}\n`;
    });

    allContent += `\n\n`; // spacing between blocks
  });

  if (allContent) {
    const blob = new Blob([allContent], { type: "text/plain" });
    const link = document.createElement("a");
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    link.href = URL.createObjectURL(blob);
    link.download = `enhanced_network_info_${timestamp}.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  } else {
    alert("No blocks found!");
  }
})();
