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
      Posts: {
        Row: {
          content: string
          created_at: string
          desc: string
          id: number
          title: string
        }
        Insert: {
          content: string
          created_at?: string
          desc: string
          id?: number
          title: string
        }
        Update: {
          content?: string
          created_at?: string
          desc?: string
          id?: number
          title?: string
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
