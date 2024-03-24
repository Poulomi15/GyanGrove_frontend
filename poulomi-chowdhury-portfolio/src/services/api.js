const BASE_URL = 'https://jsonplaceholder.typicode.com';

export const fetchProjects = async () => {
  try {
    const response = await fetch(`${BASE_URL}/posts`);
    if (!response.ok) {
      throw new Error('Failed to fetch projects');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching projects:', error.message);
    return [];
  }
};
