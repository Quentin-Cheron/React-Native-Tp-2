create table
  public.profiles (
    id uuid not null,
    updated_at timestamp with time zone null,
    username text null,
    full_name text null,
    avatar_url text null,
    website text null,
    constraint profiles_pkey primary key (id),
    constraint profiles_username_key unique (username),
    constraint profiles_id_fkey foreign key (id) references auth.users (id),
    constraint username_length check ((char_length(username) >= 3))
  ) tablespace pg_default;