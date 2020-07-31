import React from 'react';
import { FormControlLabel, Switch } from '@material-ui/core';
export default function LabeledSwitch(props) {
  return (
    <div key={props.value} width="100%">
      <FormControlLabel
        value={props.value}
        control={<Switch edge='end' value={props.value} onChange={e => props.onChange(e)} color="primary" />}
        label={props.title}
        labelPlacement="start"
      />
    </div>
  )
}