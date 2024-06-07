import { createClient } from "@supabase/supabase-js/"

const supaBaseUrl = "https://akwtbbtmassyfnuyhlib.supabase.co"
const supaBaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFrd3RiYnRtYXNzeWZudXlobGliIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTEwMzc4MzQsImV4cCI6MjAyNjYxMzgzNH0.vJGF6HXMuU0gG9jR2rL8oQuTiUhMjWXHIED9_kwGv7k"

export const supabase = createClient(supaBaseUrl, supaBaseAnonKey)