import { useState } from "react";
import AnalysisResult from "./pages/AnalysisResult";
import Dashboard from "./pages/Dashboard";
import FollowUp from "./pages/FollowUp";
import Login from "./pages/Login";
import PatientProfile from "./pages/PatientProfile";
import Patients from "./pages/Patients";
import Queue from "./pages/Queue";
import Referral from "./pages/Referral";
import Timeline from "./pages/Timeline";
import VisitAssessment from "./pages/VisitAssessment";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [page, setPage] = useState("dashboard");

  const handleLogin = () => {
    setLoggedIn(true);
    setPage("dashboard");
  };

  const handleLogout = () => {
    setLoggedIn(false);
    setPage("dashboard");
  };

  if (!loggedIn) {
    return <Login onLogin={handleLogin} />;
  }

  if (page === "queue") {
    return <Queue onBack={() => setPage("dashboard")} />;
  }

  if (page === "patients") {
    return (
      <Patients
        onBack={() => setPage("dashboard")}
        onNavigate={setPage}
      />
    );
  }

  if (page === "profile") {
    return (
      <PatientProfile
        onBack={() => setPage("patients")}
        onNavigate={setPage}
      />
    );
  }

  if (page === "visit") {
    return (
      <VisitAssessment
        onBack={() => setPage("profile")}
        onNavigate={setPage}
      />
    );
  }

  if (page === "analysis") {
    return (
      <AnalysisResult
        onBack={() => setPage("visit")}
        onNavigate={setPage}
      />
    );
  }

  if (page === "referral") {
    return (
      <Referral
        onBack={() => setPage("analysis")}
        onNavigate={setPage}
      />
    );
  }

  if (page === "followup") {
    return (
      <FollowUp
        onBack={() => setPage("referral")}
        onNavigate={setPage}
      />
    );
  }

  if (page === "timeline") {
    return (
      <Timeline
        onBack={() => setPage("followup")}
        onNavigate={setPage}
      />
    );
  }

  return (
    <Dashboard
      onLogout={handleLogout}
      onNavigate={setPage}
    />
  );
}

export default App;