/* eslint-disable @typescript-eslint/no-explicit-any */
export interface StravaActivity {
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
  map: Map;
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
  description?: any;
  calories: number;
  perceived_exertion?: any;
  prefer_perceived_exertion?: any;
  segment_efforts: Segmenteffort[];
  splits_metric: Splitsmetric[];
  splits_standard: Splitsmetric[];
  laps: Lap[];
  best_efforts: Besteffort[];
  photos: Photos;
  stats_visibility: Statsvisibility[];
  hide_from_home: boolean;
  device_name: string;
  embed_token: string;
  similar_activities: Similaractivities;
  available_zones: any[];
}

interface Similaractivities {
  effort_count: number;
  average_speed: number;
  min_average_speed: number;
  mid_average_speed: number;
  max_average_speed: number;
  pr_rank: number;
  frequency_milestone?: any;
  trend: Trend;
  resource_state: number;
}

interface Trend {
  speeds: number[];
  current_activity_index: number;
  min_speed: number;
  mid_speed: number;
  max_speed: number;
  direction: number;
}

interface Statsvisibility {
  type: string;
  visibility: string;
}

interface Photos {
  primary?: any;
  count: number;
}

interface Besteffort {
  id: number;
  resource_state: number;
  name: string;
  activity: Athlete;
  athlete: Athlete;
  elapsed_time: number;
  moving_time: number;
  start_date: string;
  start_date_local: string;
  distance: number;
  start_index: number;
  end_index: number;
  pr_rank?: any;
  achievements: any[];
}

interface Lap {
  id: number;
  resource_state: number;
  name: string;
  activity: Athlete;
  athlete: Athlete;
  elapsed_time: number;
  moving_time: number;
  start_date: string;
  start_date_local: string;
  distance: number;
  start_index: number;
  end_index: number;
  total_elevation_gain: number;
  average_speed: number;
  max_speed: number;
  average_cadence: number;
  device_watts: boolean;
  average_watts: number;
  average_heartrate: number;
  max_heartrate: number;
  lap_index: number;
  split: number;
  pace_zone: number;
}

interface Splitsmetric {
  distance: number;
  elapsed_time: number;
  elevation_difference: number;
  moving_time: number;
  split: number;
  average_speed: number;
  average_grade_adjusted_speed: number;
  average_heartrate: number;
  pace_zone: number;
}

interface Segmenteffort {
  id: number;
  resource_state: number;
  name: string;
  activity: Athlete;
  athlete: Athlete;
  elapsed_time: number;
  moving_time: number;
  start_date: string;
  start_date_local: string;
  distance: number;
  start_index: number;
  end_index: number;
  average_cadence: number;
  device_watts: boolean;
  average_watts: number;
  average_heartrate: number;
  max_heartrate: number;
  segment: Segment;
  pr_rank?: any;
  achievements: any[];
  hidden: boolean;
}

interface Segment {
  id: number;
  resource_state: number;
  name: string;
  activity_type: string;
  distance: number;
  average_grade: number;
  maximum_grade: number;
  elevation_high: number;
  elevation_low: number;
  start_latlng: number[];
  end_latlng: number[];
  elevation_profile?: any;
  climb_category: number;
  city: string;
  state: string;
  country: string;
  private: boolean;
  hazardous: boolean;
  starred: boolean;
}

interface Map {
  id: string;
  polyline: string;
  resource_state: number;
  summary_polyline: string;
}

interface Athlete {
  id: number;
  resource_state: number;
}

export interface ActivityLaps {
  id: number;
  resource_state: number;
  name: string;
  activity: Activity;
  athlete: Activity;
  elapsed_time: number;
  moving_time: number;
  start_date: string;
  start_date_local: string;
  distance: number;
  start_index: number;
  end_index: number;
  total_elevation_gain: number;
  average_speed: number;
  max_speed: number;
  average_cadence: number;
  device_watts: boolean;
  average_watts: number;
  lap_index: number;
  split: number;
}

interface Activity {
  id: number;
  resource_state: number;
}

export type LapData = {
  distance: number;
  laptime: number;
};
