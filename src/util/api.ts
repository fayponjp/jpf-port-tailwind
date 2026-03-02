import { createClient } from '@supabase/supabase-js/dist/index.cjs';

export const supabase = createClient(
    import.meta.env.VITE_SUPABASE_URL,
    import.meta.env.VITE_SUPABASE_KEY
);

export interface Message {
    id: string;
    created_at: string;
    guest: string;
    guest_email?: string;
    guest_message: string;
}

export const GuestbookAPI = {
    async getGuestbook() {
        let query = supabase
                .from('GuestbookEntries')
                .select()
                .eq('approved', true)

        const { data, error } = await query;

        return { data, error };
    },

    async addGuestbookEntry({guest, guest_email, guest_message} : {guest: string, guest_email?: string, guest_message: string}) {
        const { error } = await supabase
                .from('GuestbookEntries')
                .insert({guest, guest_message, guest_email});

        if (error) {
            console.error(error.message);
        }
    }
}