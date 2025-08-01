import loadingGear from '../assets/images/loadingGear.gif'

interface LoadingProps {
    isLoading: boolean;
}

export function Loading({isLoading}: LoadingProps) {
    return (
        isLoading ? (
            <div className={"flex flex-col items-center"}>
                <img src={loadingGear} alt="loading..." className="" />
                <p className={"text-gray-500"}>데이터를 조회 중입니다.</p>
                <p className={"text-gray-500"}>잠시만 기다려주세요...</p>
            </div>
        ) : (<></>)
    )
}