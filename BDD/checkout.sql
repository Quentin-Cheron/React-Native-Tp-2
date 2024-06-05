create table
  public.checkout (
    id character varying not null,
    created_at timestamp with time zone not null default now(),
    products json[] null,
    constraint checkout_pkey primary key (id),
    constraint checkout_id_fkey foreign key (id) references restaurants (id)
  ) tablespace pg_default;