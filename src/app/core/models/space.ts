// @typescript-eslint/no-explicit-any

export type Root = Root2[]

export interface Root2 {
  flight_number: number
  mission_name: string
  mission_id: string[]
  launch_year: string
  launch_date_unix: number
  launch_date_utc: string
  launch_date_local: string
  is_tentative: boolean
  tentative_max_precision: string
  tbd: boolean
  launch_window?: number
  rocket: Rocket
  ships: string[]
  telemetry: Telemetry
  launch_site: LaunchSite
  launch_success?: boolean
  links: Links
  details?: string
  upcoming: boolean
  static_fire_date_utc?: string
  static_fire_date_unix?: number
  timeline: any
  crew?: any[]
  last_date_update?: string
  last_ll_launch_date?: string
  last_ll_update?: string
  last_wiki_launch_date?: string
  last_wiki_revision?: string
  last_wiki_update?: string
  launch_date_source?: string
}

export interface Rocket {
  rocket_id: string
  rocket_name: string
  rocket_type: string
  first_stage: FirstStage
  second_stage: SecondStage
  fairings?: Fairings
}

export interface FirstStage {
  cores: Core[]
}

export interface Core {
  core_serial?: string
  flight?: number
  block: number
  gridfins?: boolean
  legs?: boolean
  reused?: boolean
  land_success?: boolean
  landing_intent?: boolean
  landing_type?: string
  landing_vehicle?: string
}

export interface SecondStage {
  block: number
  payloads: Payload[]
}

export interface Payload {
  payload_id: string
  norad_id: number[]
  reused: boolean
  customers: string[]
  nationality: string
  manufacturer?: string
  payload_type: string
  payload_mass_kg?: number
  payload_mass_lbs?: number
  orbit: string
  orbit_params: OrbitParams
  cap_serial?: string
  mass_returned_kg: any
  mass_returned_lbs: any
  flight_time_sec: any
  cargo_manifest: any
}

export interface OrbitParams {
  reference_system: string
  regime: string
  longitude: any
  semi_major_axis_km?: number
  eccentricity?: number
  periapsis_km?: number
  apoapsis_km?: number
  inclination_deg?: number
  period_min?: number
  lifespan_years?: number
  epoch?: string
  mean_motion?: number
  raan?: number
  arg_of_pericenter?: number
  mean_anomaly?: number
}

export interface Fairings {
  reused?: boolean
  recovery_attempt?: boolean
  recovered?: boolean
  ship?: string
}

export interface Telemetry {
  flight_club: any
}

export interface LaunchSite {
  site_id: string
  site_name: string
  site_name_long: string
}

export interface Links {
  mission_patch?: string
  mission_patch_small?: string
  reddit_campaign?: string
  reddit_launch?: string
  reddit_recovery?: string
  reddit_media?: string
  presskit: any
  article_link?: string
  wikipedia?: string
  video_link?: string
  youtube_id?: string
  flickr_images: string[]
}
