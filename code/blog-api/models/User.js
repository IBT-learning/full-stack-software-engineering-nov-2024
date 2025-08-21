import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
    },
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      maxlength: 50,
    },
    displayName: {
      type: String,
      required: false,
      maxlength: 100,
      default: function() {
        return this.username;
      }
    },
    bio: {
      type: String,
      required: false,
      maxlength: 500,
      default: '',
    },
    tagline: {
      type: String,
      required: false,
      maxlength: 150,
      default: '',
    },
    profilePhoto: {
      type: String,
      required: false,
      default: '/images/default-avatar.png',
    },
    location: {
      type: String,
      required: false,
      maxlength: 100,
    },
    website: {
      type: String,
      required: false,
      maxlength: 200,
    },
    isActive: {
      type: Boolean,
      default: true,
    }
  },
  { 
    timestamps: true,
    toJSON: {
      transform: function(doc, ret) {
        delete ret.password; // Never send password in JSON responses
        return ret;
      }
    }
  }
);

export default mongoose.model('User', UserSchema);