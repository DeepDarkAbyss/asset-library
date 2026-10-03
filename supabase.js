const SUPABASE_URL = "https://wxvfqqgiijkiwceylfmw.supabase.co";

const SUPABASE_PUBLISHABLE_KEY =
    "sb_publishable_P_RvmYAMJgKnRu6z1AzcFw_zH0hgwkN";


const supabaseClient =
    supabase.createClient(
        SUPABASE_URL,
        SUPABASE_PUBLISHABLE_KEY
    );
