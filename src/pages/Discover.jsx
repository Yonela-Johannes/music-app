import { Error, Loader, SongCard } from '../components'
import { genres } from "../assets/constants"
import { useGetTopChartsQuery } from '../redux/services/shazam'


const Discover = () => {
    const {data, isFetching, error} = useGetTopChartsQuery()
    const genresTitle = 'Pop'

    if(isFetching) return <Loader title="loading songs" />;
    if(error) return <Error />;
    return (
        <div className='flex flex-col'>
            <div className='w-full flex justify between items-center sm:flex-row flex-col mt-4 mb-10'>
                <h2 className='font-bold text-3xl text-black'>Discover</h2>
                <select
                    onChange={() => {}}
                    value=""
                    className='bg-black text-gray-300 p-4 text-sm rounded-lg outline-none sm:mt-0 mt-5'>
                        {genres.map((genre) => <option key={genre.value} value={genre.value} >{genre.title}</option>)}
                </select>
            </div>
            <div className="flex flex-wrap sm:justify-start justify-center gap-8">
                {data?.map((song, i) => (
                    <SongCard
                        key={song.key}
                        song={song}
                        i={i}
                    />
                ))}
            </div>
        </div>
    )
}
export default Discover;
