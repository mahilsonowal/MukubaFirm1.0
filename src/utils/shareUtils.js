// Share utility functions for document sharing

export const handleShare = async (document, documentType, setShareSnackbar) => {
  try {
    // Create a shareable URL for this specific document
    const shareUrl = `${window.location.origin}/${documentType}#${document.id}`;
    
    // Try to use the Web Share API if available (mobile devices)
    if (navigator.share) {
      await navigator.share({
        title: document.title,
        text: document.description || `Check out this ${documentType.replace('-', ' ')} from Mukuba Economic Research and Consulting Firm`,
        url: shareUrl,
      });
    } else {
      // Fallback: copy to clipboard
      await navigator.clipboard.writeText(shareUrl);
      setShareSnackbar({
        open: true,
        message: 'Link copied to clipboard!'
      });
    }
  } catch (err) {
    console.error('Error sharing:', err);
    setShareSnackbar({
      open: true,
      message: 'Failed to share. Please try again.'
    });
  }
};

// Document type to URL path mapping
export const getDocumentTypePath = (documentType) => {
  const typeMap = {
    'policy-briefs': 'research/policy-briefs',
    'research-work': 'research/research-work',
    'working-papers': 'research/working-papers',
    'annual-reports': 'reports/annual-reports',
    'strategic-plans': 'reports/strategic-plans',
    'budget-analysis': 'research/budget-analysis',
    'parliamentary-submissions': 'research/parliamentary-submissions',
    'miscellaneous-research': 'research/miscellaneous-research'
  };
  
  return typeMap[documentType] || 'research';
};

// Enhanced share function with proper URL generation and authentication awareness
export const shareDocument = async (document, documentType, setShareSnackbar) => {
  try {
    const path = getDocumentTypePath(documentType);
    const shareUrl = `${window.location.origin}/${path}#${document.id}`;
    
    // Try to use the Web Share API if available (mobile devices)
    if (navigator.share) {
      await navigator.share({
        title: document.title,
        text: `${document.description || `Check out this ${documentType.replace('-', ' ')} from Mukuba Economic Research and Consulting Firm`}\n\nNote: Login required to access this content.`,
        url: shareUrl,
      });
    } else {
      // Fallback: copy to clipboard
      await navigator.clipboard.writeText(shareUrl);
      setShareSnackbar({
        open: true,
        message: 'Link copied to clipboard! Note: Login required to access this content.'
      });
    }
  } catch (err) {
    console.error('Error sharing:', err);
    setShareSnackbar({
      open: true,
      message: 'Failed to share. Please try again.'
    });
  }
};

// Check if a route requires authentication
export const isProtectedRoute = (documentType) => {
  const protectedTypes = [
    'policy-briefs',
    'research-work', 
    'working-papers',
    'annual-reports',
    'strategic-plans',
    'budget-analysis',
    'parliamentary-submissions',
    'miscellaneous-research'
  ];
  
  return protectedTypes.includes(documentType);
};

// Enhanced share function with authentication awareness
export const shareDocumentWithAuth = async (document, documentType, setShareSnackbar, isAuthenticated) => {
  try {
    const path = getDocumentTypePath(documentType);
    const shareUrl = `${window.location.origin}/${path}#${document.id}`;
    
    // Check if this is a protected route
    const requiresAuth = isProtectedRoute(documentType);
    
    let shareText = document.description || `Check out this ${documentType.replace('-', ' ')} from Mukuba Economic Research and Consulting Firm`;
    
    if (requiresAuth) {
      shareText += '\n\nNote: Login required to access this content.';
    }
    
    // Try to use the Web Share API if available (mobile devices)
    if (navigator.share) {
      await navigator.share({
        title: document.title,
        text: shareText,
        url: shareUrl,
      });
    } else {
      // Fallback: copy to clipboard
      await navigator.clipboard.writeText(shareUrl);
      const message = requiresAuth 
        ? 'Link copied to clipboard! Note: Login required to access this content.'
        : 'Link copied to clipboard!';
      setShareSnackbar({
        open: true,
        message: message
      });
    }
  } catch (err) {
    console.error('Error sharing:', err);
    setShareSnackbar({
      open: true,
      message: 'Failed to share. Please try again.'
    });
  }
};
