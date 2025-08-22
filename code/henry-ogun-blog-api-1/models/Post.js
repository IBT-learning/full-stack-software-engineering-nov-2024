import mongoose from 'mongoose';

const PostSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      maxlength: 200,
      trim: true,
    },
    body: {
      type: String,
      required: true,
      minlength: 10,
    },
    excerpt: {
      type: String,
      required: false,
      maxlength: 300,
    },
    userId: {
      type: mongoose.Schema.ObjectId,
      ref: 'User',
      required: true,
    },
    slug: {
      type: String,
      required: false,
      unique: true,
      sparse: true,
    },
    featuredImage: {
      type: String,
      required: false,
    },
    tags: [{
      type: String,
      maxlength: 50,
    }],
    category: {
      type: String,
      required: false,
      maxlength: 100,
    },
    isPublished: {
      type: Boolean,
      default: true,
    },
    publishedAt: {
      type: Date,
      default: Date.now,
    },
    readTime: {
      type: Number, // minutes
      required: false,
    },
    views: {
      type: Number,
      default: 0,
    }
  },
  { 
    timestamps: true 
  }
);

// Create slug from title before saving
PostSchema.pre('save', async function(next) {
  if (this.title && !this.slug) {
    let baseSlug = this.title
      .toLowerCase()
      .replace(/[^a-zA-Z0-9\s]/g, '')
      .replace(/\s+/g, '-')
      .substring(0, 100);
    
    // Check for existing slugs and append number if needed
    let slug = baseSlug;
    let counter = 1;
    
    while (await mongoose.model('Post').findOne({ slug, _id: { $ne: this._id } })) {
      slug = `${baseSlug}-${counter}`;
      counter++;
    }
    
    this.slug = slug;
  }
  
  // Auto-generate excerpt if not provided
  if (this.body && !this.excerpt) {
    this.excerpt = this.body.substring(0, 150) + '...';
  }
  
  // Calculate read time (average 200 words per minute)
  if (this.body) {
    const wordCount = this.body.split(/\s+/).length;
    this.readTime = Math.ceil(wordCount / 200);
  }
  
  next();
});

export default mongoose.model('Post', PostSchema);