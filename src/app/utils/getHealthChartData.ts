import { Bodyfat, Health, Weight } from '@/app/type';

export function getHealthChartData(data: Health): {
  weightdata: Weight[];
  bodyfatdata: Bodyfat[];
} {
  const weight = data.data.filter((d) => d.tag === '6021').reverse();
  const weightdata = weight.map((x) => ({
    date: `${x.date.slice(0, 4)}/${x.date.slice(4, 6)}/${x.date.slice(6, 8)}`,
    weight: x.keydata,
  }));

  const bodyfat = data.data.filter((d) => d.tag === '6022').reverse();
  const bodyfatdata = bodyfat.map((x) => ({
    date: `${x.date.slice(0, 4)}/${x.date.slice(4, 6)}/${x.date.slice(6, 8)}`,
    bodyfat: x.keydata,
  }));

  return { weightdata, bodyfatdata };
}
