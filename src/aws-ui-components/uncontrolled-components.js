import InputControlled from '@awsui/components-react/input';
import RadioGroupControlled from '@awsui/components-react/radio-group';
import TextareaControlled from '@awsui/components-react/textarea';
import SelectControlled from '@awsui/components-react/select';
import MultiselectControlled from '@awsui/components-react/multiselect';
import TilesControlled from '@awsui/components-react/tiles';
import CheckboxControlled from '@awsui/components-react/checkbox';
import AppLayoutControlled from '@awsui/components-react/app-layout';

import uncontrol from './uncontrol.jsx';

export const Input = uncontrol(InputControlled, 'onChange', 'value');
export const RadioGroup = uncontrol(RadioGroupControlled, 'onChange', 'value');
export const Textarea = uncontrol(TextareaControlled, 'onChange', 'value');
export const Select = uncontrol(SelectControlled, 'onChange', 'selectedOption');
export const Multiselect = uncontrol(MultiselectControlled, 'onChange', 'selectedOptions');
export const Tiles = uncontrol(TilesControlled, 'onChange', 'value');
export const Checkbox = uncontrol(CheckboxControlled, 'onChange', 'checked');
export const AppLayout = uncontrol(AppLayoutControlled, 'onNavigationChange', 'navigationOpen', 'open');
export { default as AttributeEditor } from './uncontrolled-attribute-editor';
