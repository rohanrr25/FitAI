# FitAI

A mobile-first fitness app for intelligent wardrobe management and outfit recommendations powered by AI.

## 🎯 Current Phase: Closet Builder

### Phase 1 Goals
Build a wardrobe management system where users can:
- Upload & tag clothing items
- Automatic background removal
- AI-powered auto-tagging (category & color)
- Manual tag editing

## 🏗️ Technology Stack

- **Framework**: Expo + React Native (TypeScript)
- **Backend**: Supabase (Auth, Database, Storage)
- **Platform**: iOS & Android (mobile-first approach)

## ✅ Progress Tracker

### Completed
- [x] Expo project initialized with TypeScript
- [x] Supabase packages installed
- [x] Project structure created
- [x] Supabase client configured
- [x] Authentication UI (email/password + Google OAuth)
- [x] User session management

### Next Steps
- [ ] Image upload flow (camera + gallery)
- [ ] Database schema for clothing items
- [ ] Background removal integration
- [ ] AI auto-tagging

## 🔐 Environment Configuration

### Setup Supabase

1. Create a `.env` file in the project root:
```bash
EXPO_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
EXPO_PUBLIC_SUPABASE_ANON_KEY=your_anon_key_here
```

2. **Create Storage Bucket** (Required for image uploads):
   - Go to Supabase Dashboard → Storage
   - Create a new bucket called `clothing`
   - Make it public (for now) or set up RLS policies

3. Configure Authentication URLs:
   - Go to Authentication → URL Configuration
   - Add redirect URLs for your app

For production: Use `eas secret:create` to set environment variables securely.
