-- Document Tables Setup for Mukuba Consulting
-- Run this in your Supabase SQL Editor

-- Create all document tables with consistent structure
CREATE TABLE IF NOT EXISTS public.reports (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    title TEXT NOT NULL,
    description TEXT,
    access TEXT DEFAULT 'public' CHECK (access IN ('public', 'paid')),
    file_url TEXT NOT NULL,
    file_name TEXT NOT NULL,
    original_file_name TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS public.strategic_plans (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    title TEXT NOT NULL,
    description TEXT,
    access TEXT DEFAULT 'public' CHECK (access IN ('public', 'paid')),
    file_url TEXT NOT NULL,
    file_name TEXT NOT NULL,
    original_file_name TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS public.research_work (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    title TEXT NOT NULL,
    description TEXT,
    access TEXT DEFAULT 'public' CHECK (access IN ('public', 'paid')),
    file_url TEXT NOT NULL,
    file_name TEXT NOT NULL,
    original_file_name TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS public.budget_analysis (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    title TEXT NOT NULL,
    description TEXT,
    access TEXT DEFAULT 'public' CHECK (access IN ('public', 'paid')),
    file_url TEXT NOT NULL,
    file_name TEXT NOT NULL,
    original_file_name TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS public.policy_briefs (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    title TEXT NOT NULL,
    description TEXT,
    access TEXT DEFAULT 'public' CHECK (access IN ('public', 'paid')),
    file_url TEXT NOT NULL,
    file_name TEXT NOT NULL,
    original_file_name TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS public.working_papers (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    title TEXT NOT NULL,
    description TEXT,
    access TEXT DEFAULT 'public' CHECK (access IN ('public', 'paid')),
    file_url TEXT NOT NULL,
    file_name TEXT NOT NULL,
    original_file_name TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS public.parliamentary_submissions (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    title TEXT NOT NULL,
    description TEXT,
    access TEXT DEFAULT 'public' CHECK (access IN ('public', 'paid')),
    file_url TEXT NOT NULL,
    file_name TEXT NOT NULL,
    original_file_name TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS public.miscellaneous_research (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    title TEXT NOT NULL,
    description TEXT,
    access TEXT DEFAULT 'public' CHECK (access IN ('public', 'paid')),
    file_url TEXT NOT NULL,
    file_name TEXT NOT NULL,
    original_file_name TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security on all document tables
ALTER TABLE public.reports ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.strategic_plans ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.research_work ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.budget_analysis ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.policy_briefs ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.working_papers ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.parliamentary_submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.miscellaneous_research ENABLE ROW LEVEL SECURITY;

-- Create RLS policies for all document tables
-- Public read access for all users
CREATE POLICY "Public read access" ON public.reports FOR SELECT USING (true);
CREATE POLICY "Public read access" ON public.strategic_plans FOR SELECT USING (true);
CREATE POLICY "Public read access" ON public.research_work FOR SELECT USING (true);
CREATE POLICY "Public read access" ON public.budget_analysis FOR SELECT USING (true);
CREATE POLICY "Public read access" ON public.policy_briefs FOR SELECT USING (true);
CREATE POLICY "Public read access" ON public.working_papers FOR SELECT USING (true);
CREATE POLICY "Public read access" ON public.parliamentary_submissions FOR SELECT USING (true);
CREATE POLICY "Public read access" ON public.miscellaneous_research FOR SELECT USING (true);

-- Admin full access for all document tables
CREATE POLICY "Admin full access" ON public.reports FOR ALL USING (
    EXISTS (
        SELECT 1 FROM public.profiles 
        WHERE id = auth.uid() AND role = 'admin'
    )
);

CREATE POLICY "Admin full access" ON public.strategic_plans FOR ALL USING (
    EXISTS (
        SELECT 1 FROM public.profiles 
        WHERE id = auth.uid() AND role = 'admin'
    )
);

CREATE POLICY "Admin full access" ON public.research_work FOR ALL USING (
    EXISTS (
        SELECT 1 FROM public.profiles 
        WHERE id = auth.uid() AND role = 'admin'
    )
);

CREATE POLICY "Admin full access" ON public.budget_analysis FOR ALL USING (
    EXISTS (
        SELECT 1 FROM public.profiles 
        WHERE id = auth.uid() AND role = 'admin'
    )
);

CREATE POLICY "Admin full access" ON public.policy_briefs FOR ALL USING (
    EXISTS (
        SELECT 1 FROM public.profiles 
        WHERE id = auth.uid() AND role = 'admin'
    )
);

CREATE POLICY "Admin full access" ON public.working_papers FOR ALL USING (
    EXISTS (
        SELECT 1 FROM public.profiles 
        WHERE id = auth.uid() AND role = 'admin'
    )
);

CREATE POLICY "Admin full access" ON public.parliamentary_submissions FOR ALL USING (
    EXISTS (
        SELECT 1 FROM public.profiles 
        WHERE id = auth.uid() AND role = 'admin'
    )
);

CREATE POLICY "Admin full access" ON public.miscellaneous_research FOR ALL USING (
    EXISTS (
        SELECT 1 FROM public.profiles 
        WHERE id = auth.uid() AND role = 'admin'
    )
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS reports_created_at_idx ON public.reports(created_at);
CREATE INDEX IF NOT EXISTS reports_access_idx ON public.reports(access);
CREATE INDEX IF NOT EXISTS strategic_plans_created_at_idx ON public.strategic_plans(created_at);
CREATE INDEX IF NOT EXISTS strategic_plans_access_idx ON public.strategic_plans(access);
CREATE INDEX IF NOT EXISTS research_work_created_at_idx ON public.research_work(created_at);
CREATE INDEX IF NOT EXISTS research_work_access_idx ON public.research_work(access);
CREATE INDEX IF NOT EXISTS budget_analysis_created_at_idx ON public.budget_analysis(created_at);
CREATE INDEX IF NOT EXISTS budget_analysis_access_idx ON public.budget_analysis(access);
CREATE INDEX IF NOT EXISTS policy_briefs_created_at_idx ON public.policy_briefs(created_at);
CREATE INDEX IF NOT EXISTS policy_briefs_access_idx ON public.policy_briefs(access);
CREATE INDEX IF NOT EXISTS working_papers_created_at_idx ON public.working_papers(created_at);
CREATE INDEX IF NOT EXISTS working_papers_access_idx ON public.working_papers(access);
CREATE INDEX IF NOT EXISTS parliamentary_submissions_created_at_idx ON public.parliamentary_submissions(created_at);
CREATE INDEX IF NOT EXISTS parliamentary_submissions_access_idx ON public.parliamentary_submissions(access);
CREATE INDEX IF NOT EXISTS miscellaneous_research_created_at_idx ON public.miscellaneous_research(created_at);
CREATE INDEX IF NOT EXISTS miscellaneous_research_access_idx ON public.miscellaneous_research(access);

-- Grant necessary permissions
GRANT ALL ON public.reports TO authenticated;
GRANT ALL ON public.strategic_plans TO authenticated;
GRANT ALL ON public.research_work TO authenticated;
GRANT ALL ON public.budget_analysis TO authenticated;
GRANT ALL ON public.policy_briefs TO authenticated;
GRANT ALL ON public.working_papers TO authenticated;
GRANT ALL ON public.parliamentary_submissions TO authenticated;
GRANT ALL ON public.miscellaneous_research TO authenticated;

GRANT ALL ON public.reports TO service_role;
GRANT ALL ON public.strategic_plans TO service_role;
GRANT ALL ON public.research_work TO service_role;
GRANT ALL ON public.budget_analysis TO service_role;
GRANT ALL ON public.policy_briefs TO service_role;
GRANT ALL ON public.working_papers TO service_role;
GRANT ALL ON public.parliamentary_submissions TO service_role;
GRANT ALL ON public.miscellaneous_research TO service_role;

-- Create function to update updated_at timestamp
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create triggers to automatically update updated_at
CREATE TRIGGER update_reports_updated_at BEFORE UPDATE ON public.reports FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
CREATE TRIGGER update_strategic_plans_updated_at BEFORE UPDATE ON public.strategic_plans FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
CREATE TRIGGER update_research_work_updated_at BEFORE UPDATE ON public.research_work FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
CREATE TRIGGER update_budget_analysis_updated_at BEFORE UPDATE ON public.budget_analysis FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
CREATE TRIGGER update_policy_briefs_updated_at BEFORE UPDATE ON public.policy_briefs FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
CREATE TRIGGER update_working_papers_updated_at BEFORE UPDATE ON public.working_papers FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
CREATE TRIGGER update_parliamentary_submissions_updated_at BEFORE UPDATE ON public.parliamentary_submissions FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
CREATE TRIGGER update_miscellaneous_research_updated_at BEFORE UPDATE ON public.miscellaneous_research FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
