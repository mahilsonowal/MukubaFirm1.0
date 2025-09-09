// Performance optimization utilities for Supabase queries

// 1. Caching strategy for frequently accessed data
export const cacheConfig = {
  // Cache recent documents for 5 minutes
  recentDocuments: 5 * 60 * 1000,
  // Cache team data for 30 minutes (rarely changes)
  teamData: 30 * 60 * 1000,
};

// 2. Optimized query selectors (only fetch needed fields)
export const optimizedQueries = {
  // Only fetch essential fields for homepage
  recentDocuments: `
    id,
    title,
    description,
    created_at,
    file_name,
    original_file_name
  `,
  
  // Full data only when needed
  fullDocument: `
    *,
    file_name,
    original_file_name
  `
};

// 3. Batch operations for multiple tables
export const batchFetchRecentDocuments = async (supabase) => {
  try {
    const [reports, research, briefs, budget] = await Promise.all([
      supabase.from('reports').select(optimizedQueries.recentDocuments).order('created_at', { ascending: false }).limit(3),
      supabase.from('research_work').select(optimizedQueries.recentDocuments).order('created_at', { ascending: false }).limit(3),
      supabase.from('policy_briefs').select(optimizedQueries.recentDocuments).order('created_at', { ascending: false }).limit(3),
      supabase.from('budget_analysis').select(optimizedQueries.recentDocuments).order('created_at', { ascending: false }).limit(3)
    ]);
    
    return { reports, research, briefs, budget };
  } catch (error) {
    console.error('Batch fetch error:', error);
    throw error;
  }
};

// 4. Error handling with fallbacks
export const safeSupabaseQuery = async (queryFn, fallbackData = []) => {
  try {
    const { data, error } = await queryFn();
    if (error) throw error;
    return data || fallbackData;
  } catch (error) {
    console.error('Supabase query error:', error);
    return fallbackData;
  }
};
