import InputAutoComplete from '../../Components/InputAutoComplete/InputAutoComplete.tsx';
import {useParams} from 'react-router-dom';
import {useAppDispatch, useAppSelector} from '../../redux-hooks.ts';
import {useEffect} from 'react';
import {getShow} from '../../Slice/ShowSlice.ts';
import {RootState} from '../../store/store.ts';
import Spinner from '../../Components/Spinner/Spinner.tsx';

const ShowPage = () => {
  const {id} = useParams<{ id: string }>();
  const dispatch = useAppDispatch();
  const numberId = Number(id);
  const show = useAppSelector(state => state.show.shows.find(item => item.show.id === numberId));
  const isLoading = useAppSelector((state: RootState) => state.show.isLoading);
  useEffect(() => {
    dispatch(getShow(numberId));
  }, [dispatch, numberId]);

  return (
    <>
      <div className="d-flex justify-content-center align-items-center">
        <div className="ms-auto mt-5 me-auto mb-5">
          <InputAutoComplete/>
        </div>
      </div>
      <>
        {isLoading && <div className={'d-flex justify-content-center align-items-center'}><Spinner/></div>}
        {!isLoading && show && (
          <>
            <div className="d-flex mt-5  " style={{marginLeft: '180px'}}>
              <img src={`${show.show.image?.medium}`} alt={'image'} className={'me-4'}/>
              <div className="">
                <h2>{show.show.name}</h2>
                <strong>О Фильме</strong>
                <ul className="list-inline">
                  <li>Премьера <strong>{show.show.premiered || ''}</strong></li>
                  <li>Страна <strong>{show.show.network?.country?.name || ''}</strong></li>
                  <li>Продолжительность Эпизода <strong>{show.show.averageRuntime || ''}min</strong></li>
                  <li>Жанры <strong>{show.show.genres || ''}</strong></li>
                </ul>
              </div>
            </div>
            <div className="d-inline-block" style={{marginLeft: '420px'}}>
              <h5>Описание</h5>
              <div dangerouslySetInnerHTML={{__html: show.show.summary}} style={{width: '450px'}}></div>
            </div>
          </>
        )}
      </>
    </>
  );
};

// check WebStorm work

export default ShowPage;
