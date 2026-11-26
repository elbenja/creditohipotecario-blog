// Every block an article can use. Passed to <Content components={...}> so MDX files
// can use them without importing anything.
import BarChart from './BarChart.astro';
import Calc from './Calc.astro';
import Callout from './Callout.astro';
import Checklist from './Checklist.astro';
import Coverage from './Coverage.astro';
import CoverageItem from './CoverageItem.astro';
import Faq from './Faq.astro';
import FaqItem from './FaqItem.astro';
import KeyFigure from './KeyFigure.astro';
import Lead from './Lead.astro';
import Legend from './Legend.astro';
import Note from './Note.astro';
import Pair from './Pair.astro';
import Panel from './Panel.astro';
import Sources from './Sources.astro';
import SplitBar from './SplitBar.astro';
import Stat from './Stat.astro';
import Stats from './Stats.astro';
import Step from './Step.astro';
import Steps from './Steps.astro';

export const articleComponents = {
  BarChart, Calc, Callout, Checklist, Coverage, CoverageItem, Faq, FaqItem, KeyFigure,
  Lead, Legend, Note, Pair, Panel, Sources, SplitBar, Stat, Stats, Step, Steps,
};
