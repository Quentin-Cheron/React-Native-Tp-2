CREATE TABLE public.restaurants (
    id character varying NOT NULL,
    created_at timestamp with time zone NOT NULL DEFAULT now(),
    restaurant_name text NULL,
    restaurant_address text NULL,
    restaurant_fees integer NULL,
    restaurant_delivery_fees integer NULL,
    restaurant_favoris integer NULL,
    restaurant_product jsonb[] NULL,
    restaurant_image text NULL,
    CONSTRAINT restaurants_pkey PRIMARY KEY (id)
) TABLESPACE pg_default;