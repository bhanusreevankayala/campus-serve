import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Events from "./pages/Events";
import Profile from "./pages/Profile";
import CreateEvent from "./pages/CreateEvent";
import AdminRoute from "./components/AdminRoute";
import Certificate from "./pages/Certificate";
import EventQR from "./pages/EventQR";
import Analytics from "./pages/Analytics";
import JoinEvent from "./pages/JoinEvent";
import Participants from "./pages/Participants";
import ScanQR from "./pages/ScanQR";

import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <Routes>

      <Route path="/" element={<Home />} />

      <Route path="/login" element={<Login />} />

      <Route path="/register" element={<Register />} />

      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />

      <Route
        path="/events"
        element={
          <ProtectedRoute>
            <Events />
          </ProtectedRoute>
        }
      />

      <Route
        path="/profile"
        element={
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        }
      />

      <Route
  path="/create-event"
  element={
    <ProtectedRoute>
      <AdminRoute>
        <CreateEvent />
      </AdminRoute>
    </ProtectedRoute>
  }
/>
<Route
  path="/certificate"
  element={
    <ProtectedRoute>
      <Certificate />
    </ProtectedRoute>
  }
/>
<Route
  path="/event-qr"
  element={
    <ProtectedRoute>
      <AdminRoute>
        <EventQR />
      </AdminRoute>
    </ProtectedRoute>
  }
/>
<Route
  path="/analytics"
  element={
    <ProtectedRoute>
      <AdminRoute>
        <Analytics />
      </AdminRoute>
    </ProtectedRoute>
  }
/>
<Route
  path="/join-event/:id"
  element={
    <ProtectedRoute>
      <JoinEvent />
    </ProtectedRoute>
  }
/>
<Route
  path="/participants"
  element={
    <ProtectedRoute>
      <AdminRoute>
        <Participants />
      </AdminRoute>
    </ProtectedRoute>
  }
/>
<Route
  path="/scan-qr"
  element={
    <ProtectedRoute>
      <ScanQR />
    </ProtectedRoute>
  }
/>  

    </Routes>
  );
}

export default App;