import { useEffect, useState } from "react";
import { Container, Background } from "./styles";

import { getMovieVideos, getSeriesVideos } from "../../services/getData";
import { getVideos } from "../../utils/getImagens";

function Modal({ movieId, showModal, setShowModal }) {
  const [video, setVideo] = useState();

  if (!movieId) return null;

  useEffect(() => {
    async function getVideo() {
      setVideo(await getMovieVideos(movieId));
    }

    getVideo();
  }, []);

  return (
    <>
      {showModal && (
        <Background onClick={() => setShowModal(false)}>
          {video && (
            <Container>
              {video ? (
                <>
                  <iframe
                    src={
                      getVideos(video[0]?.key) || getSeriesVideos(video[0]?.key)
                    }
                    title={video.name || "Trailer"}
                  ></iframe>

                  <button>X</button>
                </>
              ) : (
                <div>
                  Não a Trailer disponível <button>X</button>
                </div>
              )}
            </Container>
          )}
        </Background>
      )}
    </>
  );
}

export default Modal;
