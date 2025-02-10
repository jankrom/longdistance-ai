import {
  Calendar,
  Film,
  Gamepad2,
  MessageCircle,
  Clock,
  Gift,
  Heart,
  Music,
  Sparkles,
  Globe,
  Book,
  Zap,
} from "lucide-react"

export const FEATURES = [
  {
    icon: <Calendar className="w-full h-full" />,
    title: "AI-Powered Date Ideas",
    description:
      "Get personalized virtual and real-life date suggestions based on your preferences.",
    ctaText: "Explore Ideas",
    isPremium: false,
    iconColor: "text-green-400",
  },
  {
    icon: <Film className="w-full h-full" />,
    title: "Movie & Show Recommendations",
    description:
      "Discover perfect streaming options for your next co-watching session.",
    ctaText: "Find Shows",
    isPremium: false,
    iconColor: "text-red-400",
  },
  {
    icon: <Gamepad2 className="w-full h-full" />,
    title: "Multiplayer Games",
    description:
      "Browse our curated list of interactive online games for couples.",
    ctaText: "Play Now",
    isPremium: false,
    iconColor: "text-purple-400",
  },
  {
    icon: <Clock className="w-full h-full" />,
    title: "Time Zone & Schedule Syncing",
    description:
      "Automatically sync schedules to find the best times to connect.",
    ctaText: "Sync Now",
    isPremium: false,
    iconColor: "text-yellow-400",
  },
  {
    icon: <MessageCircle className="w-full h-full" />,
    title: "AI Chatbot Assistant",
    description:
      "Get relationship support, conversation ideas, and reminders from our AI.",
    ctaText: "Chat Now",
    isPremium: true,
    iconColor: "text-blue-400",
  },
  {
    icon: <Gift className="w-full h-full" />,
    title: "AI-Powered Gift Finder",
    description:
      "Discover thoughtful, personalized gift ideas based on your partner's preferences.",
    ctaText: "Find Gifts",
    isPremium: true,
    iconColor: "text-pink-400",
  },
  {
    icon: <Heart className="w-full h-full" />,
    title: "Love Letter AI Generator",
    description:
      "Craft heartfelt messages with the help of our AI writing assistant.",
    ctaText: "Write Now",
    isPremium: true,
    iconColor: "text-red-500",
  },
  {
    icon: <Music className="w-full h-full" />,
    title: "Shared Playlist Creator",
    description:
      "Create the perfect playlist based on both partners' musical tastes.",
    ctaText: "Make Playlist",
    isPremium: true,
    iconColor: "text-indigo-400",
  },
  {
    icon: <Sparkles className="w-full h-full" />,
    title: "Surprise & Challenge Generator",
    description:
      "Spice up your relationship with AI-generated fun challenges and surprises.",
    ctaText: "Get Inspired",
    isPremium: true,
    iconColor: "text-yellow-500",
  },
  {
    icon: <Globe className="w-full h-full" />,
    title: "Virtual Travel Experiences",
    description:
      "Explore the world together with curated online experiences and tours.",
    ctaText: "Start Exploring",
    isPremium: true,
    iconColor: "text-green-500",
  },
  {
    icon: <Book className="w-full h-full" />,
    title: "Shared Journal & Daily Prompts",
    description:
      "Stay connected with AI-powered private journaling prompts for couples.",
    ctaText: "Start Writing",
    isPremium: true,
    iconColor: "text-blue-500",
  },
  {
    icon: <Zap className="w-full h-full" />,
    title: "Countdown & Memory Sharing",
    description:
      "Track milestones, plan your next visit, and share your favorite memories.",
    ctaText: "Create Timeline",
    isPremium: true,
    iconColor: "text-purple-500",
  },
]
