import * as React from 'react';
import styles from './PalettePalSeWebpart.module.scss';
import { IPalettePalSeWebpartProps } from './IPalettePalSeWebpartProps';
import { escape } from '@microsoft/sp-lodash-subset';
import { randomizeCase } from '@mikezimm/fps-lib-se/lib/stringCase';
// import { randomizeCase } from '@mikezimm/fps-core-v7/lib/logic/Strings/stringCase';
// import { check4This } from '@mikezimm/fps-core-v7/lib/logic/Links/CheckSearch';

export default class PalettePalSeWebpart extends React.Component < IPalettePalSeWebpartProps, {} > {
  public render(): React.ReactElement<IPalettePalSeWebpartProps> {
    // alert( randomizeCase('Hey This alert is working' ) )
    return(
      <div className = { styles.palettePalSeWebpart } >
  <div className={styles.container}>
    <div className={styles.row}>
      <div className={styles.column}>
        <span className={styles.title} style={{ fontSize: 'xxx-large'}}>{ randomizeCase(`Welcome to SharePoint!` )}</span>
        <p className={styles.subTitle}>Customize SharePoint experiences using Web Parts.</p>
        <p className={styles.description}>{escape(this.props.description)}</p>
        <a href='https://aka.ms/spfx' className={styles.button}>
          <span className={styles.label}>Learn more</span>
        </a>
      </div>
    </div>
  </div>
      </div >
    );
  }
}
