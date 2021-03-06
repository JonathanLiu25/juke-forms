import React from 'react';

const NewPlaylist = function(props) {
  return (
    <div className="well">
      <form className="form-horizontal" onSubmit={props.submitHandler}>
        <fieldset>
          <legend>New Playlist</legend>
          <div className="form-group">
            <label className="col-xs-2 control-label">Name</label>
            <div className="col-xs-10">
              <input className="form-control" type="text" value={props.inputValue} onChange={props.inputHandler} />
            </div>
          </div>
          <div className="form-group">
            <div className="col-xs-10 col-xs-offset-2">
              <button type="submit" className="btn btn-success" disabled={props.buttonDisabled} >Create Playlist</button>
            </div>
          </div>
          <div className={props.alertClassName}>{props.alertText}</div>
        </fieldset>
      </form>
    </div>
  )
}

export default NewPlaylist
