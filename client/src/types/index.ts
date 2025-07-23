export interface Survey {
  id: string;
  name: string;
  ownerId: string;
  lastModified: string;
  creationDate: string;
  isActive: boolean;
}

export interface SurveyResponse {
  result: {
    elements: Survey[];
    nextPage?: string;
  };
}

export interface RepositoryStats {
  totalProjects: number;
  activeProjects: number;
  totalParticipants: number;
  completedSurveys: number;
  monthlyData: MonthlyData[];
  projectCategories: ProjectCategory[];
}

export interface MonthlyData {
  month: string;
  projects: number;
  participants: number;
}

export interface ProjectCategory {
  category: string;
  count: number;
}

export interface ApiResponse<T> {
  data?: T;
  error?: string;
  details?: string;
}