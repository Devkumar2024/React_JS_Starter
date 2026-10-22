import { useState, useEffect } from 'react';
import { ProfileCard } from './components/profile-card/ProfileCard';
import { SkillList } from './components/skill-list/SkillList';
import { StudySessions } from './components/study-sessions/StudySessions';
import { ProfileViews } from './components/profile-views/ProfileViews';
import { FocusTimer } from './components/focus-timer/FocusTimer';
import type { Profile, Skill } from './types';

// Agar localStorage khali ho toh yeh default profile use hoga
const initialProfile: Profile = { 
  name: 'Dev', 
  city: 'Jakarta', 
  role: 'Developer', 
  birthYear: 1995 
};

export default function App() {
  // ✅ 1. STATE (Lazy Initialization to avoid cascading renders)
  // Load once on mount: localStorage se value uthana
  const [skills, setSkills] = useState<Skill[]>(() => {
    const raw = localStorage.getItem('skills');
    return raw ? JSON.parse(raw) : [];
  });

  const [profile, setProfile] = useState<Profile>(() => {
    const raw = localStorage.getItem('profile');
    return raw ? JSON.parse(raw) : initialProfile;
  });

  const [sessions, setSessions] = useState<number>(() => {
    const raw = localStorage.getItem('sessions');
    return raw ? Number(raw) : 0;
  });

  // ✅ 2. SAVE EFFECTS (Save on change)
  // Jab bhi state badlegi, localStorage update hoga
  useEffect(() => {
    localStorage.setItem('skills', JSON.stringify(skills));
  }, [skills]);

  useEffect(() => {
    localStorage.setItem('profile', JSON.stringify(profile));
  }, [profile]);

  useEffect(() => {
    localStorage.setItem('sessions', String(sessions));
  }, [sessions]);

  // ✅ 3. TAB TITLE EFFECT (Sync)
  // Deps [sessions, profile.name] rakhe hain, pura profile object nahi
  useEffect(() => {
    document.title = `Dashboard - ${profile.name} - ${sessions} sessions`;
  }, [sessions, profile.name]);

  // ✅ 4. RENDER
  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1>My Dashboard</h1>
      
      <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
        {/* ProfileCard ko profile aur setProfile chahiye */}
        <ProfileCard profile={profile} setProfile={setProfile} />
        
        {/* SkillsList ko skills aur setSkills chahiye */}
        <SkillList skills={skills} setSkills={setSkills} />
        
        {/* StudySessions ko sessions aur setSessions chahiye */}
        <StudySessions sessions={sessions} setSessions={setSessions} />
        
        {/* Inko kisi prop ki zaroorat nahi hai (Local state) */}
        <ProfileViews />
        <FocusTimer />
      </div>
    </div>
  );
}