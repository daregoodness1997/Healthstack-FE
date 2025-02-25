import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import MenuList from '@mui/material/MenuList';
import Popper from '@mui/material/Popper';
import * as React from 'react';

import DateRange from '../inputs/DateRange';
import DebouncedInput from '../inputs/DebouncedInput';

const FilterMenu = ({ schema = [], onSearch = (_) => {}, dateField = false }) => {
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event: Event | React.SyntheticEvent) => {
    if (anchorRef.current && anchorRef.current.contains(event.target as HTMLElement)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event: React.KeyboardEvent) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === 'Escape') {
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current!.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        position: 'relative',
        justifyContent: 'space-around',
        zIndex: '10',
      }}
    >
      <label
        ref={anchorRef}
        id="composition-button"
        aria-controls={open ? 'composition-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        onClick={handleToggle}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-around',
          flexWrap: 'nowrap',
          padding: '6px',
          width: '100px',
          borderRadius: '2px',
          margin: '0 10px',
        }}
      >
        <span>Search All</span>
        <i className="bi bi-chevron-down"></i>
      </label>
      <Popper
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        placement="bottom-start"
        transition
        disablePortal
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin: placement === 'bottom-start' ? 'left top' : 'left bottom',
            }}
          >
            <div style={{ background: '#fff', padding: '0.4rem ', width: '200px' }}>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList
                  autoFocusItem={open}
                  id="composition-menu"
                  aria-labelledby="composition-button"
                  onKeyDown={handleListKeyDown}
                  sx={{ padding: '0.4rem' }}
                >
                  <div>
                    <input type="checkbox" />
                    <label>Default</label>
                  </div>
                  {schema
                    .filter((obj) => obj.filterable)
                    .map((obj, i) => (
                      <div key={i}>
                        <input type="checkbox" onChange={onSearch} />
                        <label>{obj.description}</label>
                      </div>
                    ))}
                </MenuList>
              </ClickAwayListener>
            </div>
          </Grow>
        )}
      </Popper>
      <DebouncedInput label="Search here" onChangeValue={onSearch} />
      {dateField && <DateRange />}
    </div>
  );
};

export default FilterMenu;
