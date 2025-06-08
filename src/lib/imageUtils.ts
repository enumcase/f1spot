// Image URL configuration for GitHub + jsDelivr CDN
const IMAGE_CONFIG = {
  // Replace with your actual GitHub username and repository name
  GITHUB_USERNAME: 'enumcase', // Updated with actual username
  GITHUB_REPO: 'f1spot-images',     // Already correct
  BRANCH: 'master',                   // Updated to use master branch
  USE_BRANCH_IN_URL: false,         // Set to false to use latest version (more flexible)
};

/**
 * Generate jsDelivr CDN URL for GitHub-hosted images
 * @param imagePath - Path to image relative to repository root (e.g., 'circuits/melbourne.jpg')
 * @returns Full jsDelivr CDN URL
 */
export function getImageUrl(imagePath: string): string {
  const { GITHUB_USERNAME, GITHUB_REPO, BRANCH, USE_BRANCH_IN_URL } = IMAGE_CONFIG;
  
  // Remove leading slash if present
  const cleanPath = imagePath.startsWith('/') ? imagePath.slice(1) : imagePath;
  
  if (USE_BRANCH_IN_URL) {
    return `https://cdn.jsdelivr.net/gh/${GITHUB_USERNAME}/${GITHUB_REPO}@${BRANCH}/${cleanPath}`;
  } else {
    // Use latest version (more flexible, updates automatically)
    return `https://cdn.jsdelivr.net/gh/${GITHUB_USERNAME}/${GITHUB_REPO}/${cleanPath}`;
  }
}

/**
 * Generate circuit image URL
 * @param circuitFileName - Just the filename (e.g., 'melbourne.jpg')
 * @returns Full CDN URL for circuit image
 */
export function getCircuitImageUrl(circuitFileName: string): string {
  return getImageUrl(`circuits/${circuitFileName}`);
}

/**
 * Generate circuit map image URL
 * @param mapFileName - Just the filename (e.g., 'azerbaijan-map.png')
 * @returns Full CDN URL for circuit map image
 */
export function getCircuitMapUrl(mapFileName: string): string {
  return getImageUrl(`circuits/maps/${mapFileName}`);
}

/**
 * Generate seat view image URL
 * @param circuitName - Circuit name (e.g., 'azerbaijan', 'belgium')
 * @param imageFileName - Image filename (e.g., 'absheron-grandstand-1.jpg')
 * @returns Full CDN URL for seat view image
 */
export function getSeatViewImageUrl(circuitName: string, imageFileName: string): string {
  return getImageUrl(`seats/${circuitName}/${imageFileName}`);
}

/**
 * Get fallback image URL (for error cases)
 */
export function getFallbackImageUrl(): string {
  return getImageUrl('fallback/circuit-placeholder.jpg');
}

// Export configuration for easy access
export const imageConfig = IMAGE_CONFIG; 