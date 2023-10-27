export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      characters: {
        Row: {
          card_id: number
          created_at: string
          id: number
          link: string
          subtitle: string
          text: string | null
          title: string
          url: string | null
          user_id: string
        }
        Insert: {
          card_id: number
          created_at?: string
          id?: number
          link: string
          subtitle: string
          text?: string | null
          title: string
          url?: string | null
          user_id: string
        }
        Update: {
          card_id?: number
          created_at?: string
          id?: number
          link?: string
          subtitle?: string
          text?: string | null
          title?: string
          url?: string | null
          user_id?: string
        }
        Relationships: []
      }
      episodes: {
        Row: {
          card_id: number
          created_at: string
          id: number
          link: string
          subtitle: string
          text: string
          title: string
          url: string
          user_id: string
        }
        Insert: {
          card_id: number
          created_at?: string
          id?: number
          link: string
          subtitle: string
          text: string
          title: string
          url: string
          user_id: string
        }
        Update: {
          card_id?: number
          created_at?: string
          id?: number
          link?: string
          subtitle?: string
          text?: string
          title?: string
          url?: string
          user_id?: string
        }
        Relationships: []
      }
      locations: {
        Row: {
          card_id: number
          created_at: string
          id: number
          link: string
          subtitle: string
          text: string | null
          title: string
          url: string | null
          user_id: string
        }
        Insert: {
          card_id: number
          created_at?: string
          id?: number
          link: string
          subtitle: string
          text?: string | null
          title: string
          url?: string | null
          user_id: string
        }
        Update: {
          card_id?: number
          created_at?: string
          id?: number
          link?: string
          subtitle?: string
          text?: string | null
          title?: string
          url?: string | null
          user_id?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
