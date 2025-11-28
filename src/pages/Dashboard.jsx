import { useState, useEffect, useRef } from 'react';
import { 
  BarChart, Bar, LineChart, Line, PieChart, Pie, Cell,
  XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer 
} from 'recharts';

// Fixed Animated Number Component
const AnimatedNumber = ({ value, duration = 2000, className = "" }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    
    let numericValue;
    let prefix = '';
    let suffix = '';

    if (typeof value === 'string') {
      const numericMatch = value.match(/([^0-9]*)([0-9]+)([^0-9]*)/);
      if (numericMatch) {
        prefix = numericMatch[1] || '';
        numericValue = parseInt(numericMatch[2]);
        suffix = numericMatch[3] || '';
      } else {
        numericValue = 0;
      }
    } else {
      numericValue = value;
    }

    const increment = numericValue / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= numericValue) {
        setCount(numericValue);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isVisible, value, duration]);

  const displayValue = typeof value === 'string' 
    ? `${prefix}${count}${suffix}`
    : count;

  return (
    <span ref={ref} className={className}>
      {displayValue}
    </span>
  );
};

const SimpleAnimatedNumber = ({ value, duration = 2000, className = "" }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    const end = typeof value === 'string' ? parseInt(value.replace(/[^0-9]/g, '')) || 0 : value;
    const increment = end / (duration / 16);
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isVisible, value, duration]);

  return (
    <span ref={ref} className={className}>
      {typeof value === 'string' ? value.replace(/[0-9]+/, count) : count}
    </span>
  );
};

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Vibrant gradient backgrounds for each section
  const gradientBackgrounds = [
    'bg-gradient-to-br from-purple-500 via-pink-500 to-red-500',
    'bg-gradient-to-br from-blue-500 via-cyan-500 to-green-500',
    'bg-gradient-to-br from-orange-500 via-amber-500 to-yellow-500',
    'bg-gradient-to-br from-green-500 via-emerald-500 to-teal-500',
    'bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500',
    'bg-gradient-to-br from-red-500 via-orange-500 to-amber-500',
    'bg-gradient-to-br from-teal-500 via-cyan-500 to-blue-500',
    'bg-gradient-to-br from-pink-500 via-rose-500 to-red-500'
  ];

  // Sample data for charts - Updated for Education
  const performanceData = [
    { month: 'Jan', completionRate: 85.2, avgScore: 78.5, enrollments: 245 },
    { month: 'Feb', completionRate: 88.8, avgScore: 82.1, enrollments: 278 },
    { month: 'Mar', completionRate: 90.5, avgScore: 85.3, enrollments: 312 },
    { month: 'Apr', completionRate: 89.2, avgScore: 83.7, enrollments: 298 },
    { month: 'May', completionRate: 92.1, avgScore: 87.2, enrollments: 325 },
    { month: 'Jun', completionRate: 94.2, avgScore: 89.5, enrollments: 356 }
  ];

  const courseDistribution = [
    { name: 'Technology', value: 35 },
    { name: 'Business', value: 25 },
    { name: 'Design', value: 20 },
    { name: 'Science', value: 12 },
    { name: 'Languages', value: 8 }
  ];

  const studentStatus = [
    { status: 'Active', count: 342, color: '#10B981' },
    { status: 'Progress', count: 128, color: '#3B82F6' },
    { status: 'New', count: 45, color: '#F59E0B' },
    { status: 'Inactive', count: 18, color: '#EF4444' }
  ];

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8'];

  const quickStats = [
    { 
      title: 'Total Students', 
      value: '12.5K', 
      change: '+15.5%', 
      trend: 'up', 
      icon: '👨‍🎓',
      gradient: 'from-purple-500 to-pink-500'
    },
    { 
      title: 'Course Completion', 
      value: '94.2%', 
      change: '+3.1%', 
      trend: 'up', 
      icon: '📚',
      gradient: 'from-blue-500 to-cyan-500'
    },
    { 
      title: 'Active Learners', 
      value: '8.2K', 
      change: '+12.2%', 
      trend: 'up', 
      icon: '🎯',
      gradient: 'from-orange-500 to-amber-500'
    },
    { 
      title: 'Avg. Score', 
      value: '86.5%', 
      change: '+4.2%', 
      trend: 'up', 
      icon: '🏆',
      gradient: 'from-green-500 to-emerald-500'
    }
  ];

  const recentActivities = [
    { 
      id: 1, 
      activity: 'New Course Enrollment', 
      student: 'Sarah Johnson', 
      status: 'Completed', 
      time: '2h ago', 
      icon: '🎓',
      gradient: 'from-indigo-500 to-purple-500'
    },
    { 
      id: 2, 
      activity: 'Assignment Submission', 
      student: 'Mike Chen', 
      status: 'Graded', 
      time: '5h ago', 
      icon: '📝',
      gradient: 'from-teal-500 to-cyan-500'
    },
    { 
      id: 3, 
      activity: 'Course Completion', 
      student: 'Emily Davis', 
      status: 'Certified', 
      time: '1d ago', 
      icon: '✅',
      gradient: 'from-green-500 to-emerald-500'
    },
    { 
      id: 4, 
      activity: 'Live Session', 
      student: 'Alex Rodriguez', 
      status: 'Completed', 
      time: '1d ago', 
      icon: '🎥',
      gradient: 'from-orange-500 to-red-500'
    }
  ];

  const instructors = [
    { 
      name: 'Dr. Sarah Wilson', 
      role: 'Computer Science', 
      students: 420, 
      rating: 4.8, 
      status: 'Active', 
      avatar: 'SW', 
      gradient: 'from-blue-500 to-cyan-500'
    },
    { 
      name: 'Prof. James Brown', 
      role: 'Business Management', 
      students: 380, 
      rating: 4.9, 
      status: 'Active', 
      avatar: 'JB', 
      gradient: 'from-purple-500 to-pink-500'
    },
    { 
      name: 'Dr. Maria Garcia', 
      role: 'Data Science', 
      students: 550, 
      rating: 4.7, 
      status: 'Active', 
      avatar: 'MG', 
      gradient: 'from-green-500 to-emerald-500'
    },
    { 
      name: 'Prof. David Lee', 
      role: 'UX Design', 
      students: 280, 
      rating: 4.6, 
      status: 'Away', 
      avatar: 'DL', 
      gradient: 'from-orange-500 to-amber-500'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-pink-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full animate-float-slow opacity-20"
            style={{
              width: `${Math.random() * 120 + 30}px`,
              height: `${Math.random() * 120 + 30}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: `linear-gradient(45deg, ${
                ['#A78BFA', '#F472B6', '#60A5FA', '#34D399', '#FBBF24', '#C084FC', '#4ADE80', '#F87171'][i % 8]
              }, ${
                ['#DDD6FE', '#FBCFE8', '#BFDBFE', '#A7F3D0', '#FDE68A', '#E9D5FF', '#BBF7D0', '#FECACA'][(i + 4) % 8]
              })`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${Math.random() * 25 + 15}s`,
              filter: 'blur(20px)'
            }}
          />
        ))}
      </div>

      {/* Header */}
      <header className="bg-black/30 backdrop-blur-xl shadow-2xl border-b border-white/10 relative z-10">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center py-4 space-y-3 sm:space-y-0">
            <div className="w-full sm:w-auto">
              <h1 className="text-xl sm:text-2xl mt-20 font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent animate-pulse">
                Education Analytics Dashboard
              </h1>
              <p className="text-purple-200 text-sm sm:text-base animate-pulse-slow">Welcome back, Academic Director 👋</p>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 py-4 sm:py-6 relative z-10">
        {/* Quick Stats with Animated Numbers */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-6">
          {quickStats.map((stat, index) => (
            <div 
              key={index}
              className="relative overflow-hidden rounded-2xl shadow-2xl p-4 sm:p-6 border border-white/20 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-fade-in-up group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Animated Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-90 group-hover:opacity-100 transition-all duration-500`}></div>
              
              {/* Shimmer Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              
              <div className="relative z-10">
                <div className="flex items-center justify-between">
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="text-xl drop-shadow-lg">{stat.icon}</span>
                      <p className="text-xs sm:text-sm font-semibold text-white/90 truncate">{stat.title}</p>
                    </div>
                    <p className="text-lg sm:text-2xl font-bold text-white mt-1 sm:mt-2 truncate drop-shadow-lg">
                      <SimpleAnimatedNumber value={stat.value} duration={1500} />
                    </p>
                  </div>
                  <div className={`p-2 sm:p-3 rounded-full flex-shrink-0 ml-2 transition-all duration-300 group-hover:scale-110 backdrop-blur-sm ${
                    stat.trend === 'up' ? 'bg-green-500/30' : 'bg-red-500/30'
                  }`}>
                    <svg className={`w-4 h-4 sm:w-6 sm:h-6 text-white drop-shadow-lg ${
                      stat.trend === 'up' ? 'animate-bounce' : 'animate-pulse'
                    }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                        d={stat.trend === 'up' ? "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" : "M13 17h8m0 0V9m0 8l-8-8-4 4-6-6"} />
                    </svg>
                  </div>
                </div>
                <p className={`text-xs mt-1 sm:mt-2 truncate flex items-center space-x-1 text-white/80 ${
                  stat.trend === 'up' ? 'animate-pulse-slow' : ''
                }`}>
                  <span>{stat.change}</span>
                  <span>from last month</span>
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 mb-6">
          {/* Performance Chart */}
          <div className="relative overflow-hidden rounded-2xl shadow-2xl p-4 sm:p-6 border border-white/20 hover:shadow-2xl transition-all duration-500 animate-fade-in-up">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-pink-600/20 to-indigo-600/20 backdrop-blur-sm"></div>
            <div className="relative z-10">
              <h3 className="text-base sm:text-lg font-semibold text-white mb-4 flex items-center drop-shadow-lg">
                <span className="mr-2 text-2xl">📈</span>
                Learning Performance Metrics
              </h3>
              <div className="h-64 sm:h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={performanceData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                    <XAxis dataKey="month" fontSize={12} stroke="rgba(255,255,255,0.7)" />
                    <YAxis fontSize={12} stroke="rgba(255,255,255,0.7)" />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: 'rgba(0, 0, 0, 0.8)',
                        backdropFilter: 'blur(10px)',
                        border: '1px solid rgba(255,255,255,0.2)',
                        borderRadius: '12px',
                        color: 'white'
                      }}
                    />
                    <Legend wrapperStyle={{ color: 'white' }} />
                    <Line 
                      type="monotone" 
                      dataKey="completionRate" 
                      stroke="url(#completionGradient)" 
                      strokeWidth={3}
                      dot={{ fill: '#A78BFA', strokeWidth: 2, r: 4 }}
                      activeDot={{ r: 6, fill: '#A78BFA' }}
                      name="Completion Rate %"
                    />
                    <Line 
                      type="monotone" 
                      dataKey="enrollments" 
                      stroke="url(#enrollmentsGradient)" 
                      strokeWidth={3}
                      dot={{ fill: '#F472B6', strokeWidth: 2, r: 4 }}
                      activeDot={{ r: 6, fill: '#F472B6' }}
                      name="Enrollments"
                    />
                    <defs>
                      <linearGradient id="completionGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#A78BFA" stopOpacity={1}/>
                        <stop offset="100%" stopColor="#A78BFA" stopOpacity={0.3}/>
                      </linearGradient>
                      <linearGradient id="enrollmentsGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#F472B6" stopOpacity={1}/>
                        <stop offset="100%" stopColor="#F472B6" stopOpacity={0.3}/>
                      </linearGradient>
                    </defs>
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

          {/* Course Distribution */}
          <div className="relative overflow-hidden rounded-2xl shadow-2xl p-4 sm:p-6 border border-white/20 hover:shadow-2xl transition-all duration-500 animate-fade-in-up">
            <div className="absolute inset-0 bg-gradient-to-br from-green-600/20 via-emerald-600/20 to-teal-600/20 backdrop-blur-sm"></div>
            <div className="relative z-10">
              <h3 className="text-base sm:text-lg font-semibold text-white mb-4 flex items-center drop-shadow-lg">
                <span className="mr-2 text-2xl">🎯</span>
                Course Category Distribution
              </h3>
              <div className="h-64 sm:h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={courseDistribution}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ name, percent }) => `${name} (${(percent * 100).toFixed(0)}%)`}
                      outerRadius={80}
                      fill="#99e918ff"
                      dataKey="value"
                      animationBegin={0}
                      animationDuration={1500}
                    >
                      {courseDistribution.map((entry, index) => (
                        <Cell 
                          key={`cell-${index}`} 
                          fill={COLORS[index % COLORS.length]}
                          stroke="white"
                          strokeWidth={2}
                        />
                      ))}
                    </Pie>
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: 'rgba(255, 255, 255, 1)',
                        backdropFilter: 'blur(10px)',
                        border: '1px solid rgba(255,255,255,0.2)',
                        borderRadius: '12px',
                        color: 'white'
                      }}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>

        {/* Student Status & Recent Activity */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
          {/* Student Status */}
          <div className="relative overflow-hidden rounded-2xl shadow-2xl p-4 sm:p-6 border border-white/20 hover:shadow-2xl transition-all duration-500 animate-fade-in-up">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-600/20 via-amber-600/20 to-yellow-600/20 backdrop-blur-sm"></div>
            <div className="relative z-10">
              <h3 className="text-base sm:text-lg font-semibold text-white mb-4 flex items-center drop-shadow-lg">
                <span className="mr-2 text-2xl">📊</span>
                Student Engagement Status
              </h3>
              <div className="space-y-4">
                {studentStatus.map((student, index) => (
                  <div 
                    key={index} 
                    className="flex items-center justify-between p-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-[1.02] group"
                  >
                    <div className="flex items-center min-w-0 flex-1">
                      <div 
                        className="w-3 h-3 rounded-full mr-3 flex-shrink-0 animate-pulse shadow-lg"
                        style={{ backgroundColor: student.color }}
                      ></div>
                      <span className="text-sm font-medium text-white truncate group-hover:text-purple-200 transition-colors">
                        {student.status}
                      </span>
                    </div>
                    <div className="flex items-center space-x-4 ml-2">
                      <span className="text-sm font-semibold text-white whitespace-nowrap drop-shadow-lg">
                        <SimpleAnimatedNumber value={student.count} duration={1000} />
                      </span>
                      <div className="w-24 bg-white/20 rounded-full h-2 overflow-hidden backdrop-blur-sm">
                        <div 
                          className="h-2 rounded-full transition-all duration-1000 ease-out shadow-lg"
                          style={{ 
                            width: `${(student.count / 533) * 100}%`,
                            backgroundColor: student.color
                          }}
                        ></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="relative overflow-hidden rounded-2xl shadow-2xl p-4 sm:p-6 border border-white/20 hover:shadow-2xl transition-all duration-500 animate-fade-in-up">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/20 via-purple-600/20 to-pink-600/20 backdrop-blur-sm"></div>
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-base sm:text-lg font-semibold text-white flex items-center drop-shadow-lg">
                  <span className="mr-2 text-2xl">🔔</span>
                  Recent Learning Activity
                </h3>
              </div>
              <div className="space-y-3">
                {recentActivities.map((activity, index) => (
                  <div 
                    key={activity.id} 
                    className="relative overflow-hidden flex items-center justify-between p-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-[1.02] group animate-fade-in-up"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className={`absolute inset-0 bg-gradient-to-r ${activity.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                    <div className="flex items-center min-w-0 flex-1 pr-2 relative z-10">
                      <span className="text-lg mr-3 group-hover:scale-110 transition-transform duration-300 drop-shadow-lg">
                        {activity.icon}
                      </span>
                      <div className="min-w-0 flex-1">
                        <p className="font-medium text-white text-sm sm:text-base truncate group-hover:text-purple-200 transition-colors">
                          {activity.activity}
                        </p>
                        <p className="text-white/70 text-xs sm:text-sm truncate">{activity.student}</p>
                      </div>
                    </div>
                    <div className="text-right flex-shrink-0 relative z-10">
                      <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium transition-all duration-300 group-hover:scale-105 backdrop-blur-sm ${
                        activity.status === 'Completed' 
                          ? 'bg-green-500/30 text-green-200'
                          : activity.status === 'Graded'
                          ? 'bg-blue-500/30 text-blue-200'
                          : 'bg-yellow-500/30 text-yellow-200'
                      }`}>
                        {activity.status}
                      </span>
                      <p className="text-white/60 text-xs mt-1 whitespace-nowrap group-hover:text-white/80">
                        {activity.time}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Instructor Performance */}
        <div className="relative overflow-hidden rounded-2xl shadow-2xl p-4 sm:p-6 mt-6 border border-white/20 hover:shadow-2xl transition-all duration-500 animate-fade-in-up">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/20 via-blue-600/20 to-indigo-600/20 backdrop-blur-sm"></div>
          <div className="relative z-10">
            <h3 className="text-base sm:text-lg font-semibold text-white mb-4 flex items-center drop-shadow-lg">
              <span className="mr-2 text-2xl">👨‍🏫</span>
              Instructor Performance
            </h3>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-white/20 text-sm">
                <thead>
                  <tr>
                    <th className="px-3 py-2 sm:px-4 sm:py-3 text-left text-xs font-medium text-purple-300 uppercase tracking-wider">Instructor</th>
                    <th className="px-3 py-2 sm:px-4 sm:py-3 text-left text-xs font-medium text-purple-300 uppercase tracking-wider">Department</th>
                    <th className="px-3 py-2 sm:px-4 sm:py-3 text-left text-xs font-medium text-purple-300 uppercase tracking-wider">Students</th>
                    <th className="px-3 py-2 sm:px-4 sm:py-3 text-left text-xs font-medium text-purple-300 uppercase tracking-wider">Rating</th>
                    <th className="px-3 py-2 sm:px-4 sm:py-3 text-left text-xs font-medium text-purple-300 uppercase tracking-wider">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/20">
                  {instructors.map((instructor, index) => (
                    <tr 
                      key={index}
                      className="hover:bg-white/10 transition-all duration-300 transform hover:scale-[1.01] animate-fade-in-up group"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <td className="px-3 py-2 sm:px-4 sm:py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className={`w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r ${instructor.gradient} rounded-full flex items-center justify-center text-white font-semibold text-xs sm:text-sm mr-2 sm:mr-3 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                            {instructor.avatar}
                          </div>
                          <div className="min-w-0">
                            <div className="text-sm font-medium text-white truncate group-hover:text-purple-200 transition-colors">
                              {instructor.name}
                            </div>
                            <div className="text-white/60 text-xs truncate">{instructor.name.toLowerCase().replace(' ', '.')}@edu.com</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-3 py-2 sm:px-4 sm:py-4 whitespace-nowrap text-xs sm:text-sm text-white/80 truncate">
                        {instructor.role}
                      </td>
                      <td className="px-3 py-2 sm:px-4 sm:py-4 whitespace-nowrap text-xs sm:text-sm text-white font-semibold">
                        <SimpleAnimatedNumber value={instructor.students} duration={1200} />
                      </td>
                      <td className="px-3 py-2 sm:px-4 sm:py-4 whitespace-nowrap text-xs sm:text-sm text-white font-semibold">
                        <SimpleAnimatedNumber value={`${instructor.rating}/5`} duration={1200} />
                      </td>
                      <td className="px-3 py-2 sm:px-4 sm:py-4 whitespace-nowrap">
                        <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium transition-all duration-300 hover:scale-105 backdrop-blur-sm ${
                          instructor.status === 'Active' 
                            ? 'bg-green-500/30 text-green-200 animate-pulse-slow'
                            : 'bg-yellow-500/30 text-yellow-200'
                        }`}>
                          {instructor.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Additional Education Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mt-6">
          <div className="relative overflow-hidden rounded-2xl shadow-2xl p-4 sm:p-6 border border-white/20 hover:shadow-2xl transition-all duration-500 animate-fade-in-up">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/20 via-green-600/20 to-lime-600/20 backdrop-blur-sm"></div>
            <div className="relative z-10">
              <h4 className="text-sm font-semibold text-white mb-3 flex items-center drop-shadow-lg">
                <span className="mr-2 text-xl">📚</span>
                Learning Analytics
              </h4>
              <div className="space-y-3">
                {[
                  { label: 'Avg. Study Time', value: '3.2h/day', color: 'text-green-300' },
                  { label: 'Assignment Rate', value: '92.5%', color: 'text-blue-300' },
                  { label: 'Dropout Rate', value: '2.8%', color: 'text-red-300' }
                ].map((item, index) => (
                  <div key={index} className="flex justify-between items-center group hover:scale-105 transition-transform duration-300">
                    <span className="text-sm text-white/80">{item.label}</span>
                    <span className={`text-sm font-semibold ${item.color} animate-pulse`}>{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-2xl shadow-2xl p-4 sm:p-6 border border-white/20 hover:shadow-2xl transition-all duration-500 animate-fade-in-up">
            <div className="absolute inset-0 bg-gradient-to-br from-amber-600/20 via-orange-600/20 to-red-600/20 backdrop-blur-sm"></div>
            <div className="relative z-10">
              <h4 className="text-sm font-semibold text-white mb-3 flex items-center drop-shadow-lg">
                <span className="mr-2 text-xl">🎓</span>
                Certification Metrics
              </h4>
              <div className="space-y-3">
                {[
                  { label: 'Certificates Issued', value: '8.4K', color: 'text-green-300' },
                  { label: 'Pass Rate', value: '88.4%', color: 'text-cyan-300' },
                  { label: 'Advanced Courses', value: '+15.3%', color: 'text-emerald-300' }
                ].map((item, index) => (
                  <div key={index} className="flex justify-between items-center group hover:scale-105 transition-transform duration-300">
                    <span className="text-sm text-white/80">{item.label}</span>
                    <span className={`text-sm font-semibold ${item.color} animate-pulse`}>{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-2xl shadow-2xl p-4 sm:p-6 border border-white/20 hover:shadow-2xl transition-all duration-500 animate-fade-in-up">
            <div className="absolute inset-0 bg-gradient-to-br from-pink-600/20 via-rose-600/20 to-red-600/20 backdrop-blur-sm"></div>
            <div className="relative z-10">
              <h4 className="text-sm font-semibold text-white mb-3 flex items-center drop-shadow-lg">
                <span className="mr-2 text-xl">⚡</span>
                Real-time Updates
              </h4>
              <div className="space-y-2">
                {[
                  { text: '3 live sessions active', color: 'text-yellow-300', pulse: true },
                  { text: 'All systems operational', color: 'text-green-300', pulse: false },
                  { text: 'New courses available', color: 'text-blue-300', pulse: false }
                ].map((alert, index) => (
                  <div key={index} className="flex items-center space-x-2 text-sm group hover:scale-105 transition-transform duration-300">
                    <span className={`w-2 h-2 rounded-full ${alert.pulse ? 'animate-ping' : ''}`} 
                          style={{ backgroundColor: alert.color.replace('text-', '').replace('-300', '-500') }}></span>
                    <span className={alert.color}>{alert.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced CSS Animations */}
      <style jsx global>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes floatSlow {
          0%, 100% {
            transform: translateY(0px) translateX(0px) rotate(0deg);
          }
          33% {
            transform: translateY(-20px) translateX(10px) rotate(120deg);
          }
          66% {
            transform: translateY(10px) translateX(-10px) rotate(240deg);
          }
        }
        
        @keyframes pulseSlow {
          0%, 100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.8;
            transform: scale(1.05);
          }
        }

        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
          opacity: 0;
        }
        
        .animate-float-slow {
          animation: floatSlow 25s ease-in-out infinite;
        }
        
        .animate-pulse-slow {
          animation: pulseSlow 3s ease-in-out infinite;
        }

        .animate-ping {
          animation: ping 2s cubic-bezier(0, 0, 0.2, 1) infinite;
        }

        @keyframes ping {
          75%, 100% {
            transform: scale(2);
            opacity: 0;
          }
        }

        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
      `}</style>
    </div>
  );
};

export default Dashboard;