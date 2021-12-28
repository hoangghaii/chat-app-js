import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import { ChatRoom } from './components/ChatRoom';
import { Login } from './components/Login';
import { AddRoomModal } from './components/Modals/AddRoomModal';
import { InviteMemberModal } from './components/Modals/InviteMemberModal';
import { NotFound } from './components/NotFound';
import AppProvider from './Context/AppProvider';
import AuthProvider from './Context/AuthProvider';

function App() {
  return (
    <Router>
      <AuthProvider>
        <AppProvider>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<ChatRoom />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <AddRoomModal />
          <InviteMemberModal />
        </AppProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;
