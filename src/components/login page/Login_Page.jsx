import React, { useState, useEffect } from 'react';
import { User, Lock, Mail, Eye, EyeOff, ArrowRight, Activity, Dumbbell } from 'lucide-react';

function Login_Page() {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [fitnessLevel, setFitnessLevel] = useState(0); // 0 = Fat, 1 = Lifting, 2 = Fit
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  // Calculate fitness level based on form completion
  useEffect(() => {
    const fields = isLogin ? ['email', 'password'] : ['name', 'email', 'password'];
    let filledCount = 0;
    
    fields.forEach(field => {
      if (formData[field].length > 3) filledCount++;
    });

    // Logic for transformation
    // 0 fields = Fat (Level 0)
    // Partial fields = Lifting (Level 1)
    // All fields = Fit (Level 2)
    
    if (filledCount === 0) {
      setFitnessLevel(0);
    } else if (filledCount < fields.length) {
      setFitnessLevel(1);
    } else {
      setFitnessLevel(2);
    }
  }, [formData, isLogin]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real Node.js app, this would be an API call
    console.log("Submitting to Node backend:", formData);
    alert(`Welcome to the club, ${isLogin ? 'User' : formData.name}! Let's get fit.`);
  };

  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center p-4 font-sans selection:bg-orange-500 selection:text-white">
      
      {/* Background Decoration */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-orange-900/20 via-slate-900 to-slate-900"></div>
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/50 to-transparent"></div>
      </div>

      <div className="w-full max-w-4xl bg-slate-800/50 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row border border-slate-700 relative z-10 transition-all duration-500 hover:shadow-orange-900/20">
        
        {/* Left Side: The Transformation Zone */}
        <div className="w-full md:w-1/2 bg-gradient-to-br from-orange-600 to-orange-800 p-8 flex flex-col items-center justify-center relative overflow-hidden transition-all duration-700">
          
          {/* Animated Background Circles */}
          <div className="absolute inset-0 opacity-20">
            <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 border-4 border-white rounded-full transition-all duration-1000 ${fitnessLevel === 2 ? 'scale-150 opacity-0' : 'scale-100 opacity-100'}`}></div>
            <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border-2 border-white rounded-full transition-all duration-1000 delay-100 ${fitnessLevel === 2 ? 'scale-150 opacity-0' : 'scale-100 opacity-100'}`}></div>
          </div>

          {/* Text Header */}
          <div className="absolute top-8 left-0 w-full text-center z-20">
            <h2 className="text-white text-2xl font-bold tracking-widest uppercase mb-1 drop-shadow-md">
              Supra<span className="text-slate-900">Fuel</span>
            </h2>
            <p className="text-orange-200 text-xs font-medium tracking-widest">UNLOCK YOUR POTENTIAL</p>
          </div>

          {/* THE CHARACTER SVGs */}
          <div className="relative w-64 h-80 flex items-center justify-center z-10 mt-6">
            
            {/* LEVEL 0: The "Before" State (Fat/Slouching) */}
            <div className={`absolute transition-all duration-700 ease-in-out transform ${fitnessLevel === 0 ? 'opacity-100 scale-100 blur-0' : 'opacity-0 scale-90 blur-sm translate-y-10'}`}>
              <svg viewBox="0 0 200 250" className="w-56 h-auto drop-shadow-2xl">
                {/* Body */}
                <path d="M100 60 C 130 60, 150 80, 150 110 C 150 160, 140 200, 100 200 C 60 200, 50 160, 50 110 C 50 80, 70 60, 100 60" fill="#cbd5e1" />
                {/* Head */}
                <circle cx="100" cy="50" r="30" fill="#f8fafc" />
                {/* Sad Face */}
                <path d="M85 55 Q 100 45 115 55" stroke="#94a3b8" strokeWidth="3" fill="none" />
                {/* Belly Button */}
                <circle cx="100" cy="140" r="3" fill="#94a3b8" opacity="0.5" />
                {/* Slouched Arms */}
                <path d="M55 100 Q 30 130 40 160" stroke="#cbd5e1" strokeWidth="15" strokeLinecap="round" fill="none" />
                <path d="M145 100 Q 170 130 160 160" stroke="#cbd5e1" strokeWidth="15" strokeLinecap="round" fill="none" />
              </svg>
              <div className="text-center mt-4">
                <span className="bg-white/20 backdrop-blur-md text-white px-3 py-1 rounded-full text-sm font-semibold">Start Your Journey</span>
              </div>
            </div>

            {/* LEVEL 1: The "Work" State (Lifting/Sweating) */}
            <div className={`absolute transition-all duration-700 ease-in-out transform ${fitnessLevel === 1 ? 'opacity-100 scale-100 blur-0' : 'opacity-0 scale-110 blur-sm'}`}>
              <svg viewBox="0 0 200 250" className="w-60 h-auto drop-shadow-2xl">
                {/* Sweat drops animated */}
                <circle cx="130" cy="40" r="3" fill="#bfdbfe" className="animate-bounce" />
                <circle cx="70" cy="45" r="2" fill="#bfdbfe" className="animate-bounce delay-100" />
                
                {/* Body (Oval but tightening) */}
                <path d="M100 60 C 120 60, 135 80, 135 110 C 135 150, 130 190, 100 200 C 70 190, 65 150, 65 110 C 65 80, 80 60, 100 60" fill="#e2e8f0" />
                {/* Head (Red faced from effort) */}
                <circle cx="100" cy="50" r="30" fill="#fecaca" />
                {/* Gritted Teeth Face */}
                <rect x="90" y="55" width="20" height="4" rx="2" fill="#475569" />
                
                {/* Arms Lifting */}
                <path d="M65 90 Q 40 110 50 70" stroke="#e2e8f0" strokeWidth="18" strokeLinecap="round" fill="none" />
                <path d="M135 90 Q 160 110 150 70" stroke="#e2e8f0" strokeWidth="18" strokeLinecap="round" fill="none" />
                
                {/* Dumbbell */}
                <line x1="20" y1="70" x2="180" y2="70" stroke="#334155" strokeWidth="8" />
                <rect x="10" y="55" width="15" height="30" rx="2" fill="#1e293b" />
                <rect x="175" y="55" width="15" height="30" rx="2" fill="#1e293b" />
                <rect x="40" y="60" width="10" height="20" rx="2" fill="#475569" />
                <rect x="150" y="60" width="10" height="20" rx="2" fill="#475569" />
              </svg>
              <div className="text-center mt-4">
                 <span className="bg-orange-900/40 backdrop-blur-md text-white border border-orange-400/50 px-3 py-1 rounded-full text-sm font-semibold animate-pulse">Keep Pushing...</span>
              </div>
            </div>

            {/* LEVEL 2: The "Fit" State (Muscular/Superhero) */}
            <div className={`absolute transition-all duration-700 ease-in-out transform ${fitnessLevel === 2 ? 'opacity-100 scale-100 blur-0' : 'opacity-0 scale-90 translate-y-10 blur-sm'}`}>
              <svg viewBox="0 0 200 250" className="w-64 h-auto drop-shadow-2xl">
                 {/* Aura */}
                 <circle cx="100" cy="100" r="90" fill="url(#grad1)" opacity="0.5" className="animate-pulse" />
                 <defs>
                    <radialGradient id="grad1" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                      <stop offset="0%" style={{stopColor:'white', stopOpacity:0.4}} />
                      <stop offset="100%" style={{stopColor:'white', stopOpacity:0}} />
                    </radialGradient>
                  </defs>

                {/* Body (V Taper) */}
                <path d="M100 60 L 140 80 L 125 140 L 115 190 L 85 190 L 75 140 L 60 80 Z" fill="#f1f5f9" />
                
                {/* Chest Definition */}
                <path d="M75 95 Q 100 110 125 95" stroke="#cbd5e1" strokeWidth="2" fill="none" opacity="0.5" />
                <path d="M100 95 L 100 130" stroke="#cbd5e1" strokeWidth="2" fill="none" opacity="0.3" />

                {/* Head */}
                <circle cx="100" cy="50" r="28" fill="#f8fafc" />
                {/* Confident Face */}
                <path d="M90 58 Q 100 65 110 58" stroke="#334155" strokeWidth="2" fill="none" />
                
                {/* Muscular Arms (Flexing) */}
                <path d="M60 80 Q 40 90 30 60" stroke="#f1f5f9" strokeWidth="22" strokeLinecap="round" fill="none" />
                <circle cx="30" cy="60" r="14" fill="#f1f5f9" /> {/* Fist */}
                
                <path d="M140 80 Q 160 90 170 60" stroke="#f1f5f9" strokeWidth="22" strokeLinecap="round" fill="none" />
                <circle cx="170" cy="60" r="14" fill="#f1f5f9" /> {/* Fist */}
                
                {/* Abs */}
                <path d="M90 140 H 110 M 90 155 H 110 M 92 170 H 108" stroke="#cbd5e1" strokeWidth="2" strokeLinecap="round" />
              </svg>
              <div className="text-center mt-2">
                 <span className="bg-white text-orange-600 px-4 py-1 rounded-full text-sm font-bold shadow-lg flex items-center gap-2 mx-auto w-fit">
                    <Activity size={14} /> Ready to go!
                 </span>
              </div>
            </div>

          </div>
        </div>

        {/* Right Side: The Form */}
        <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center bg-slate-800 relative">
            <h3 className="text-3xl font-bold text-white mb-2">
                {isLogin ? 'Welcome Back' : 'Join the Team'}
            </h3>
            <p className="text-slate-400 mb-8 text-sm">
                {isLogin 
                    ? 'Enter your details to access your workout plan.' 
                    : 'Create an account to start your transformation.'}
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
                
                {/* Name Field (Register Only) */}
                {!isLogin && (
                    <div className="group">
                        <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2 ml-1">Full Name</label>
                        <div className="relative">
                            <User className={`absolute left-4 top-3.5 h-5 w-5 transition-colors ${formData.name ? 'text-orange-500' : 'text-slate-500'}`} />
                            <input 
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                placeholder="John Doe"
                                className="w-full bg-slate-900/50 border border-slate-700 text-white rounded-xl py-3 pl-12 pr-4 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all placeholder:text-slate-600"
                            />
                        </div>
                    </div>
                )}

                {/* Email Field */}
                <div className="group">
                    <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2 ml-1">Email Address</label>
                    <div className="relative">
                        <Mail className={`absolute left-4 top-3.5 h-5 w-5 transition-colors ${formData.email ? 'text-orange-500' : 'text-slate-500'}`} />
                        <input 
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="you@example.com"
                            className="w-full bg-slate-900/50 border border-slate-700 text-white rounded-xl py-3 pl-12 pr-4 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all placeholder:text-slate-600"
                        />
                    </div>
                </div>

                {/* Password Field */}
                <div className="group">
                    <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2 ml-1">Password</label>
                    <div className="relative">
                        <Lock className={`absolute left-4 top-3.5 h-5 w-5 transition-colors ${formData.password ? 'text-orange-500' : 'text-slate-500'}`} />
                        <input 
                            type={showPassword ? "text" : "password"}
                            name="password"
                            value={formData.password}
                            onChange={handleInputChange}
                            placeholder="••••••••"
                            className="w-full bg-slate-900/50 border border-slate-700 text-white rounded-xl py-3 pl-12 pr-12 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all placeholder:text-slate-600"
                        />
                        <button 
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-4 top-3.5 text-slate-500 hover:text-white transition-colors"
                        >
                            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                        </button>
                    </div>
                </div>

                {/* Submit Button */}
                <button 
                    type="submit" 
                    className="w-full bg-orange-600 hover:bg-orange-500 text-white font-bold py-3.5 rounded-xl shadow-lg shadow-orange-900/40 transition-all transform hover:-translate-y-1 hover:shadow-orange-600/20 flex items-center justify-center gap-2 mt-4 group"
                >
                    {isLogin ? 'Sign In' : 'Start Transformation'}
                    <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                </button>
            </form>

            {/* Toggle Login/Register */}
            <div className="mt-8 text-center">
                <p className="text-slate-400 text-sm">
                    {isLogin ? "Don't have an account? " : "Already have an account? "}
                    <button 
                        onClick={() => {
                            setIsLogin(!isLogin);
                            setFormData({name: '', email: '', password: ''}); // Reset form triggers fat state
                        }} 
                        className="text-orange-500 font-semibold hover:text-orange-400 transition-colors"
                    >
                        {isLogin ? 'Register Now' : 'Sign In'}
                    </button>
                </p>
            </div>

            {/* Decor Elements */}
            <div className="absolute top-4 right-4 text-slate-700/50">
                <Dumbbell size={40} />
            </div>

        </div>
      </div>
    </div>
  );
}

export default Login_Page;