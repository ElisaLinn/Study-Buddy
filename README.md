# 📚 Study Buddy

A modern flashcard learning application built with Next.js, featuring collections, archiving, and an interactive study experience.

## ✨ Features

### 📝 Flashcard Management

- **Create & Edit Flashcards**: Add questions and answers with ease
- **Collections**: Organize flashcards into collections by topic
- **Interactive Cards**: Flip cards to reveal answers
- **Tag System**: Visual collection tags on each flashcard

### 🎯 Learning Features

- **Active Learning Mode**: Study flashcards with instant feedback
- **Archive System**: Mark cards as "correct" to move them to archive
- **Progress Tracking**: See how many cards you've mastered
- **Correct/Incorrect Marking**: Track your learning progress

### 🎨 User Experience

- **Smooth Animations**: Card flip animations and slide effects
- **Responsive Design**: Works on desktop and mobile
- **Loading States**: Clear feedback during data fetching
- **Success/Error Messages**: Visual feedback for all actions

## 🛠️ Tech Stack

- **Framework**: Next.js 13.4.8
- **React**: 18.2.0
- **Styling**: styled-components 6.1.19
- **Database**: MongoDB with Mongoose 9.0.1
- **Data Fetching**: SWR 2.3.8
- **Icons**: Lucide React 0.562.0

## 📁 Project Structure

```
Study-Buddy/
├── components/           # Reusable React components
│   ├── AddElement/      # Add buttons and elements
│   ├── Archive/         # Archive view components
│   ├── CollectionList/  # Collection display and forms
│   ├── DeleteButton/    # Delete functionality
│   ├── DetailsPage/     # Collection details view
│   │   ├── BackButton/
│   │   ├── FlipFunction/  # Flashcard flip logic
│   │   └── FlashcardForm.js
│   ├── Edit/            # Edit modals
│   │   ├── EditFlashcardModal.js
│   │   └── EditCollectionModal/
│   ├── FlashcardsPage/  # All flashcards view
│   ├── FlashcardForrms/ # Flashcard creation forms
│   ├── Header/          # App header
│   ├── Messages/        # Success, error, loading messages
│   ├── Navigation/      # Bottom navigation
│   └── StylingGeneral/  # Global styled components
│
├── pages/               # Next.js pages (routes)
│   ├── _app.js         # App wrapper with SWR config
│   ├── _document.js    # HTML document structure
│   ├── index.js        # Home - Collections list
│   ├── [id].js         # Collection details page
│   ├── archive.js      # Archive view
│   ├── flashcards.js   # All flashcards view
│   └── api/            # API routes
│       ├── collections/
│       │   ├── index.js    # GET all, POST new
│       │   └── [id].js     # GET, PATCH, DELETE
│       └── flashcards/
│           ├── index.js    # GET all, POST new
│           └── [id].js     # GET, PATCH, DELETE
│
├── db/                  # Database configuration
│   ├── connect.js      # MongoDB connection
│   └── models/         # Mongoose schemas
│       ├── Collection.js
│       └── Flashcard.js
│
├── public/             # Static assets
└── styles.js          # Global CSS styles
```

### Scripts

You can use the following commands:

- `npm run dev` to start a development server
- `npm run build` to build the project
- `npm run start` to start a production server
- `npm run test` to run the tests
- `npm run lint` to run the linter

## 📖 Usage Guide

### Creating Collections

1. Click the "+" button on the home page
2. Enter a collection title
3. Submit to create a new collection

### Adding Flashcards

1. Open a collection by clicking on it
2. Click the "+" button
3. Enter your question and answer
4. Select a collection (if creating from "All Flashcards" page)
5. Submit to create the flashcard

### Studying Flashcards

1. Click on a flashcard to flip it
2. Mark as "Correct" (✓) or "Incorrect" (✗)
3. Correct cards move to the archive
4. Incorrect cards stay for more practice

### Managing Archive

1. Navigate to Archive page
2. View all mastered flashcards
3. Click the "X" on a card to move it back to active
4. Use "Remove All" to restore all archived cards

## 🎨 Key Features Explained

### Flashcard Flip Animation

- Smooth 3D flip effect using CSS transforms
- Border color changes when flipped
- Front shows question, back shows answer

### Archive Animation

- Cards slide right with a red flash when marked incorrect in archive
- "Remove All" triggers simultaneous animation for all cards
- 600ms animation duration with cleanup

### Form Validation

- Real-time validation
- Custom error messages
- Required field checking
- Visual feedback for errors

### Data Fetching Strategy

- Global SWR configuration in `_app.js`
- Automatic revalidation on focus
- Optimistic UI updates
- Loading states with custom component

### Performance Optimizations

- Single fetcher function for all API calls
- Separate queries instead of populate for flexibility
- Efficient state management
- Conditional rendering to reduce DOM nodes



The app uses CSS variables for theming (defined in `styles.js`):

- `--background` - Main background color
- `--foreground` - Main text color
- `--card` - Card background
- `--accent` - Primary accent color
- `--alert` - Error/alert color
- `--muted` - Muted elements
- And more...



## 🚀 Future Enhancements

Potential features to add:

- Quiz mode with timer and scoring
- XP and level system
- User authentication
- Spaced repetition algorithm
- Multiple choice questions
- Statistics and analytics


## Thank you

 --This projekt is made by Elisa Linnemannstöns
---

**Built with using Next.js and React**
