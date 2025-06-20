import { useEffect, useState } from "react";
import { getMyProfile, updateProfile } from "../api/api";

export default function Profile() {
  const [formData, setFormData] = useState({
    username: "",
    bio: "",
    location: "",
    skills: "",
    interests: ""
  });

  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(true);
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    async function fetchProfile() {
      try {
        const user = await getMyProfile();
        setFormData({
          username: user.username || "",
          bio: user.bio || "",
          location: user.location || "",
          skills: user.skills?.join(", ") || "",
          interests: user.interests?.join(", ") || ""
        });
        setProfile(user);
        setLoading(false);
      } catch (error) {
        console.error("Error loading profile:", error);
        setMessage("Failed to load profile");
        setLoading(false);
      }
    }

    fetchProfile();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const payload = {
        ...formData,
        skills: formData.skills.split(",").map((s) => s.trim()).filter(Boolean),
        interests: formData.interests.split(",").map((i) => i.trim()).filter(Boolean)
      };
      const updated = await updateProfile(payload);
      setProfile(updated);
      setMessage("Profile updated successfully!");
    } catch (err) {
      console.error("Update failed:", err);
      setMessage("Failed to update profile");
    }
  };

  if (loading) return <p>Loading profile...</p>;

  return (
    <div className="profile-container">
      <h2>Edit Profile</h2>
      {message && <p>{message}</p>}

      <div className="profile-grid">
        <form onSubmit={handleSubmit} className="profile-form">
          <label>Username:</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />

          <label>Bio:</label>
          <textarea
            name="bio"
            value={formData.bio}
            onChange={handleChange}
          />

          <label>Location:</label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
          />

          <label>Skills (comma-separated):</label>
          <input
            type="text"
            name="skills"
            value={formData.skills}
            onChange={handleChange}
          />

          <label>Interests (comma-separated):</label>
          <input
            type="text"
            name="interests"
            value={formData.interests}
            onChange={handleChange}
          />

          <button type="submit">Save Changes</button>
        </form>

        {profile && (
          <div className="profile-preview">
            <h3>Updated Profile Preview</h3>
            <p><strong>Username:</strong> {profile.username}</p>
            <p><strong>Bio:</strong> {profile.bio || "N/A"}</p>
            <p><strong>Location:</strong> {profile.location || "N/A"}</p>
            <p><strong>Skills:</strong> {Array.isArray(profile.skills) ? profile.skills.join(", ") : "N/A"}</p>
            <p><strong>Interests:</strong> {Array.isArray(profile.interests) ? profile.interests.join(", ") : "N/A"}</p>
          </div>
        )}
      </div>
    </div>
  );
}