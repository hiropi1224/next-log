export type BlogsResult = {
  contents: Blog[];
};

export interface Blog {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  title: string;
  content: string;
  eyecatch: Eyecatch;
  category: Category;
}

interface Category {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  name: string;
}

interface Eyecatch {
  url: string;
  height: number;
  width: number;
}

export interface Health {
  birth_date: string;
  data: Datum[];
  height: string;
  sex: string;
}

interface Datum {
  date: string;
  keydata: string;
  model: string;
  tag: string;
}

export interface Activity {
  resource_state: number;
  athlete: Athlete;
  name: string;
  distance: number;
  moving_time: number;
  elapsed_time: number;
  total_elevation_gain: number;
  type: string;
  sport_type: string;
  workout_type?: any;
  id: number;
  start_date: string;
  start_date_local: string;
  timezone: string;
  utc_offset: number;
  location_city?: any;
  location_state?: any;
  location_country?: any;
  achievement_count: number;
  kudos_count: number;
  comment_count: number;
  athlete_count: number;
  photo_count: number;
  map: ActivityMap;
  trainer: boolean;
  commute: boolean;
  manual: boolean;
  private: boolean;
  visibility: string;
  flagged: boolean;
  gear_id?: any;
  start_latlng: number[];
  end_latlng: number[];
  average_speed: number;
  max_speed: number;
  average_cadence: number;
  average_watts: number;
  max_watts: number;
  weighted_average_watts: number;
  kilojoules: number;
  device_watts: boolean;
  has_heartrate: boolean;
  average_heartrate: number;
  max_heartrate: number;
  heartrate_opt_out: boolean;
  display_hide_heartrate_option: boolean;
  elev_high: number;
  elev_low: number;
  upload_id: number;
  upload_id_str: string;
  external_id: string;
  from_accepted_tag: boolean;
  pr_count: number;
  total_photo_count: number;
  has_kudoed: boolean;
}

interface ActivityMap {
  id: string;
  summary_polyline: string;
  resource_state: number;
}

interface Athlete {
  id: number;
  resource_state: number;
}

export type TableOfContent = {
  text: string;
  id: string;
  tag: string;
};
