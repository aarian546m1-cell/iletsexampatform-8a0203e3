export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "14.4"
  }
  public: {
    Tables: {
      audio_files: {
        Row: {
          created_at: string
          duration_seconds: number | null
          file_url: string
          id: string
          module_id: string
          section_number: number | null
          title: string | null
        }
        Insert: {
          created_at?: string
          duration_seconds?: number | null
          file_url: string
          id?: string
          module_id: string
          section_number?: number | null
          title?: string | null
        }
        Update: {
          created_at?: string
          duration_seconds?: number | null
          file_url?: string
          id?: string
          module_id?: string
          section_number?: number | null
          title?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "audio_files_module_id_fkey"
            columns: ["module_id"]
            isOneToOne: false
            referencedRelation: "test_modules"
            referencedColumns: ["id"]
          },
        ]
      }
      band_conversions: {
        Row: {
          band_score: number
          id: string
          module_type: Database["public"]["Enums"]["module_type"]
          raw_score: number
        }
        Insert: {
          band_score: number
          id?: string
          module_type: Database["public"]["Enums"]["module_type"]
          raw_score: number
        }
        Update: {
          band_score?: number
          id?: string
          module_type?: Database["public"]["Enums"]["module_type"]
          raw_score?: number
        }
        Relationships: []
      }
      daily_streaks: {
        Row: {
          current_streak: number
          id: string
          last_practice_date: string | null
          longest_streak: number
          updated_at: string
          user_id: string
        }
        Insert: {
          current_streak?: number
          id?: string
          last_practice_date?: string | null
          longest_streak?: number
          updated_at?: string
          user_id: string
        }
        Update: {
          current_streak?: number
          id?: string
          last_practice_date?: string | null
          longest_streak?: number
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      profiles: {
        Row: {
          avatar_url: string | null
          created_at: string
          display_name: string | null
          id: string
          target_band: number | null
          updated_at: string
          user_id: string
        }
        Insert: {
          avatar_url?: string | null
          created_at?: string
          display_name?: string | null
          id?: string
          target_band?: number | null
          updated_at?: string
          user_id: string
        }
        Update: {
          avatar_url?: string | null
          created_at?: string
          display_name?: string | null
          id?: string
          target_band?: number | null
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      questions: {
        Row: {
          content: Json
          correct_answer: string
          created_at: string
          explanation: string | null
          id: string
          module_id: string
          options: Json | null
          question_number: number
          question_type: Database["public"]["Enums"]["question_type"]
        }
        Insert: {
          content?: Json
          correct_answer: string
          created_at?: string
          explanation?: string | null
          id?: string
          module_id: string
          options?: Json | null
          question_number: number
          question_type: Database["public"]["Enums"]["question_type"]
        }
        Update: {
          content?: Json
          correct_answer?: string
          created_at?: string
          explanation?: string | null
          id?: string
          module_id?: string
          options?: Json | null
          question_number?: number
          question_type?: Database["public"]["Enums"]["question_type"]
        }
        Relationships: [
          {
            foreignKeyName: "questions_module_id_fkey"
            columns: ["module_id"]
            isOneToOne: false
            referencedRelation: "test_modules"
            referencedColumns: ["id"]
          },
        ]
      }
      speaking_recordings: {
        Row: {
          ai_feedback: string | null
          band_score: number | null
          completed_at: string | null
          created_at: string
          fluency_score: number | null
          grammar_score: number | null
          id: string
          module_id: string
          part_number: number
          pronunciation_score: number | null
          recording_url: string | null
          user_id: string
          vocabulary_score: number | null
        }
        Insert: {
          ai_feedback?: string | null
          band_score?: number | null
          completed_at?: string | null
          created_at?: string
          fluency_score?: number | null
          grammar_score?: number | null
          id?: string
          module_id: string
          part_number: number
          pronunciation_score?: number | null
          recording_url?: string | null
          user_id: string
          vocabulary_score?: number | null
        }
        Update: {
          ai_feedback?: string | null
          band_score?: number | null
          completed_at?: string | null
          created_at?: string
          fluency_score?: number | null
          grammar_score?: number | null
          id?: string
          module_id?: string
          part_number?: number
          pronunciation_score?: number | null
          recording_url?: string | null
          user_id?: string
          vocabulary_score?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "speaking_recordings_module_id_fkey"
            columns: ["module_id"]
            isOneToOne: false
            referencedRelation: "test_modules"
            referencedColumns: ["id"]
          },
        ]
      }
      test_books: {
        Row: {
          book_number: number
          cover_image_url: string | null
          created_at: string
          description: string | null
          id: string
          title: string
        }
        Insert: {
          book_number: number
          cover_image_url?: string | null
          created_at?: string
          description?: string | null
          id?: string
          title: string
        }
        Update: {
          book_number?: number
          cover_image_url?: string | null
          created_at?: string
          description?: string | null
          id?: string
          title?: string
        }
        Relationships: []
      }
      test_modules: {
        Row: {
          created_at: string
          id: string
          module_type: Database["public"]["Enums"]["module_type"]
          test_id: string
          time_limit_minutes: number
          total_questions: number
        }
        Insert: {
          created_at?: string
          id?: string
          module_type: Database["public"]["Enums"]["module_type"]
          test_id: string
          time_limit_minutes?: number
          total_questions?: number
        }
        Update: {
          created_at?: string
          id?: string
          module_type?: Database["public"]["Enums"]["module_type"]
          test_id?: string
          time_limit_minutes?: number
          total_questions?: number
        }
        Relationships: [
          {
            foreignKeyName: "test_modules_test_id_fkey"
            columns: ["test_id"]
            isOneToOne: false
            referencedRelation: "tests"
            referencedColumns: ["id"]
          },
        ]
      }
      test_results: {
        Row: {
          answers: Json | null
          band_score: number
          completed_at: string
          created_at: string
          id: string
          module_id: string
          raw_score: number
          time_taken_seconds: number | null
          total_questions: number
          user_id: string
        }
        Insert: {
          answers?: Json | null
          band_score?: number
          completed_at?: string
          created_at?: string
          id?: string
          module_id: string
          raw_score?: number
          time_taken_seconds?: number | null
          total_questions?: number
          user_id: string
        }
        Update: {
          answers?: Json | null
          band_score?: number
          completed_at?: string
          created_at?: string
          id?: string
          module_id?: string
          raw_score?: number
          time_taken_seconds?: number | null
          total_questions?: number
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "test_results_module_id_fkey"
            columns: ["module_id"]
            isOneToOne: false
            referencedRelation: "test_modules"
            referencedColumns: ["id"]
          },
        ]
      }
      tests: {
        Row: {
          book_id: string
          created_at: string
          id: string
          test_number: number
          title: string
        }
        Insert: {
          book_id: string
          created_at?: string
          id?: string
          test_number: number
          title: string
        }
        Update: {
          book_id?: string
          created_at?: string
          id?: string
          test_number?: number
          title?: string
        }
        Relationships: [
          {
            foreignKeyName: "tests_book_id_fkey"
            columns: ["book_id"]
            isOneToOne: false
            referencedRelation: "test_books"
            referencedColumns: ["id"]
          },
        ]
      }
      user_roles: {
        Row: {
          id: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Insert: {
          id?: string
          role?: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Update: {
          id?: string
          role?: Database["public"]["Enums"]["app_role"]
          user_id?: string
        }
        Relationships: []
      }
      writing_submissions: {
        Row: {
          ai_feedback: string | null
          band_score: number | null
          coherence_score: number | null
          completed_at: string | null
          created_at: string
          grammar_score: number | null
          id: string
          lexical_score: number | null
          module_id: string
          task_response_score: number | null
          task1_response: string | null
          task2_response: string | null
          user_id: string
          word_count_task1: number | null
          word_count_task2: number | null
        }
        Insert: {
          ai_feedback?: string | null
          band_score?: number | null
          coherence_score?: number | null
          completed_at?: string | null
          created_at?: string
          grammar_score?: number | null
          id?: string
          lexical_score?: number | null
          module_id: string
          task_response_score?: number | null
          task1_response?: string | null
          task2_response?: string | null
          user_id: string
          word_count_task1?: number | null
          word_count_task2?: number | null
        }
        Update: {
          ai_feedback?: string | null
          band_score?: number | null
          coherence_score?: number | null
          completed_at?: string | null
          created_at?: string
          grammar_score?: number | null
          id?: string
          lexical_score?: number | null
          module_id?: string
          task_response_score?: number | null
          task1_response?: string | null
          task2_response?: string | null
          user_id?: string
          word_count_task1?: number | null
          word_count_task2?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "writing_submissions_module_id_fkey"
            columns: ["module_id"]
            isOneToOne: false
            referencedRelation: "test_modules"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      has_role: {
        Args: {
          _role: Database["public"]["Enums"]["app_role"]
          _user_id: string
        }
        Returns: boolean
      }
    }
    Enums: {
      app_role: "admin" | "user"
      module_type: "listening" | "reading" | "writing" | "speaking"
      question_type:
        | "mcq"
        | "fill_blank"
        | "true_false_not_given"
        | "matching"
        | "sentence_completion"
        | "map_labeling"
        | "matching_headings"
        | "short_answer"
      test_status: "not_started" | "in_progress" | "completed"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      app_role: ["admin", "user"],
      module_type: ["listening", "reading", "writing", "speaking"],
      question_type: [
        "mcq",
        "fill_blank",
        "true_false_not_given",
        "matching",
        "sentence_completion",
        "map_labeling",
        "matching_headings",
        "short_answer",
      ],
      test_status: ["not_started", "in_progress", "completed"],
    },
  },
} as const
