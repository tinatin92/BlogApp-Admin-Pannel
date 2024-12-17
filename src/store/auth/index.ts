import { atom } from 'jotai';
import type { Database } from '../../supabase/supabase.types'; 

type BlogRow = Database['public']['Tables']['blogs']['Row'];


export const userAtom = atom<BlogRow | null>(null);


export const usersAtom = atom<BlogRow[]>([]);
