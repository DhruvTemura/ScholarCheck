import React, { useState, useEffect } from 'react';
import { 
  FileText, 
  Upload, 
  CheckCircle, 
  Shield, 
  AlertCircle, 
  User, 
  LogOut, 
  Plus,
  Clock,
  TrendingUp,
  BarChart3,
  Eye,
  Download
} from 'lucide-react';

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const [recentAnalyses, setRecentAnalyses] = useState([
    {
      id: 1,
      fileName: "Research_Methodology_Paper.pdf",
      uploadDate: "2024-03-15",
      status: "completed",
      grammarIssues: 5,
      plagiarismScore: 12,
      formattingIssues: 3,
      overallScore: 85
    },
    {
      id: 2,
      fileName: "Literature_Review_Draft.docx",
      uploadDate: "2024-03-14",
      status: "completed",
      grammarIssues: 2,
      plagiarismScore: 8,
      formattingIssues: 1,
      overallScore: 92
    },
    {
      id: 3,
      fileName: "Data_Analysis_Chapter.pdf",
      uploadDate: "2024-03-13",
      status: "processing",
      grammarIssues: 0,
      plagiarismScore: 0,
      formattingIssues: 0,
      overallScore: 0
    }
  ]);

  useEffect(() => {
    // Get user data from localStorage (from JWT login)
    const userData = localStorage.getItem('user');
    if (userData) {
      setUser(JSON.parse(userData));
    } else {
      // If no user data, redirect to login
      window.location.href = '/login';
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    window.location.href = '/';
  };

  const handleFileUpload = () => {
    // Placeholder for file upload functionality
    alert('File upload functionality will be implemented with backend integration');
  };

  if (!user) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-2 border-blue-600 border-top-transparent"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation Bar */}
      <nav className="bg-white/80 backdrop-blur-sm border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <div className="bg-blue-600 p-2 rounded-lg">
                <FileText className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold text-slate-900">Academic Review AI</span>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="bg-slate-100 p-2 rounded-full">
                  <User className="h-5 w-5 text-slate-600" />
                </div>
                <span className="text-slate-700 font-medium">{user.name}</span>
              </div>
              <button 
                onClick={handleLogout}
                className="text-slate-600 hover:text-slate-900 p-2 rounded-md hover:bg-slate-100 transition-colors flex items-center space-x-1"
              >
                <LogOut className="h-5 w-5" />
                <span>Logout</span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900 mb-2">
            Welcome back, {user.name.split(' ')[0]}! 👋
          </h1>
          <p className="text-slate-600 text-lg">
            Ready to review your academic papers? Upload a new document or check your recent analyses.
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-500 text-sm">Total Papers</p>
                <p className="text-2xl font-bold text-slate-900">12</p>
              </div>
              <div className="bg-blue-100 p-3 rounded-lg">
                <FileText className="h-6 w-6 text-blue-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-500 text-sm">Avg. Score</p>
                <p className="text-2xl font-bold text-slate-900">88.5</p>
              </div>
              <div className="bg-green-100 p-3 rounded-lg">
                <TrendingUp className="h-6 w-6 text-green-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-500 text-sm">Issues Fixed</p>
                <p className="text-2xl font-bold text-slate-900">47</p>
              </div>
              <div className="bg-yellow-100 p-3 rounded-lg">
                <CheckCircle className="h-6 w-6 text-yellow-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-500 text-sm">This Month</p>
                <p className="text-2xl font-bold text-slate-900">3</p>
              </div>
              <div className="bg-purple-100 p-3 rounded-lg">
                <BarChart3 className="h-6 w-6 text-purple-600" />
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 mb-8">
          <h2 className="text-xl font-semibold text-slate-900 mb-4">Quick Actions</h2>
          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={handleFileUpload}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2 font-medium"
            >
              <Upload className="h-5 w-5" />
              <span>Upload New Paper</span>
            </button>
            <button className="border-2 border-slate-300 text-slate-700 px-6 py-3 rounded-lg hover:bg-slate-50 transition-colors flex items-center space-x-2 font-medium">
              <Plus className="h-5 w-5" />
              <span>Start New Project</span>
            </button>
          </div>
        </div>

        {/* Recent Analysis Results */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200">
          <div className="p-6 border-b border-slate-200">
            <h2 className="text-xl font-semibold text-slate-900">Recent Analysis Results</h2>
            <p className="text-slate-600 mt-1">Your latest paper reviews and their scores</p>
          </div>

          <div className="divide-y divide-slate-200">
            {recentAnalyses.map((analysis) => (
              <div key={analysis.id} className="p-6 hover:bg-slate-50 transition-colors">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="bg-blue-100 p-2 rounded-lg">
                      <FileText className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-medium text-slate-900">{analysis.fileName}</h3>
                      <div className="flex items-center space-x-4 text-sm text-slate-500 mt-1">
                        <span className="flex items-center space-x-1">
                          <Clock className="h-4 w-4" />
                          <span>{analysis.uploadDate}</span>
                        </span>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          analysis.status === 'completed' 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-yellow-100 text-yellow-800'
                        }`}>
                          {analysis.status === 'completed' ? 'Completed' : 'Processing...'}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button className="p-2 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-100 transition-colors">
                      <Eye className="h-4 w-4" />
                    </button>
                    <button className="p-2 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-100 transition-colors">
                      <Download className="h-4 w-4" />
                    </button>
                  </div>
                </div>

                {analysis.status === 'completed' ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div className="flex items-center justify-between p-3 bg-red-50 rounded-lg border border-red-100">
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-red-500" />
                        <span className="text-sm text-slate-700">Grammar Issues</span>
                      </div>
                      <span className="font-semibold text-red-600">{analysis.grammarIssues}</span>
                    </div>
                    
                    <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg border border-yellow-100">
                      <div className="flex items-center space-x-2">
                        <Shield className="h-4 w-4 text-yellow-500" />
                        <span className="text-sm text-slate-700">Plagiarism</span>
                      </div>
                      <span className="font-semibold text-yellow-600">{analysis.plagiarismScore}%</span>
                    </div>
                    
                    <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg border border-blue-100">
                      <div className="flex items-center space-x-2">
                        <AlertCircle className="h-4 w-4 text-blue-500" />
                        <span className="text-sm text-slate-700">Formatting</span>
                      </div>
                      <span className="font-semibold text-blue-600">{analysis.formattingIssues}</span>
                    </div>

                    <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg border border-green-100">
                      <div className="flex items-center space-x-2">
                        <TrendingUp className="h-4 w-4 text-green-500" />
                        <span className="text-sm text-slate-700">Overall Score</span>
                      </div>
                      <span className="font-semibold text-green-600">{analysis.overallScore}/100</span>
                    </div>
                  </div>
                ) : (
                  <div className="flex items-center space-x-2 text-slate-500">
                    <div className="animate-spin rounded-full h-4 w-4 border-2 border-yellow-500 border-top-transparent"></div>
                    <span className="text-sm">Analysis in progress...</span>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="p-6 text-center border-t border-slate-200">
            <button className="text-blue-600 hover:text-blue-700 font-medium">
              View All Analyses →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;