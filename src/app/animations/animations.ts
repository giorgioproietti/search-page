import { trigger, state, style, transition, animate, animateChild, query } from '@angular/animations';

export const onSideNavChange = trigger('onSideNavChange', [
  state('close',
    style({
      'position':'initial',
      'left':'50%',
      'top':'0',
      'right':'50%',
      'width': '30px',
    }
    
    )
  ),
  state('open',
    style({
      'width': '300px',
    })
  ),
  transition('close => open', animate('250ms ease-in')),
  transition('open => close', animate('250ms ease-in')),
]);


export const onMainContentChange = trigger('onMainContentChange', [
  state('close',
    style({
      'margin-left': '10px'
      
    })
  ),
  state('open',
    style({
      'position':'relative',
      'margin-left': '300px',
    })
  ),
  transition('close => open', animate('250ms ease-in')),
  transition('open => close', animate('250ms ease-in')),
]);