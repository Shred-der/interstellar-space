import React, { useEffect, useRef } from 'react'

const Starfield = ({ speedMult = 1 }) => {
    const canvasRef = useRef(null)

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return

        const ctx = canvas.getContext('2d')
        let animationFrameId

        const stars = []
        const starCount = 150

        const resize = () => {
            canvas.width = window.innerWidth
            canvas.height = window.innerHeight
        }

        const initStars = () => {
            stars.length = 0
            for (let i = 0; i < starCount; i++) {
                stars.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    size: Math.random() * 1.5,
                    opacity: Math.random(),
                    speed: 0.1 + Math.random() * 0.3
                })
            }
        }

        const draw = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height)

            stars.forEach(star => {
                ctx.beginPath()
                ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(0, 242, 255, ${star.opacity})`;
                ctx.fill();

                star.opacity += star.speed * 0.01 * (star.opacity > 0.8 ? -1 : 1);
                if (star.opacity < 0.1) star.speed *= -1;

                // Subtle drift + scroll velocity speed gain
                star.x += 0.05 * speedMult
                if (star.x > canvas.width) star.x = 0
            })

            animationFrameId = requestAnimationFrame(draw)
        }

        window.addEventListener('resize', resize)
        resize()
        initStars()
        draw()

        return () => {
            window.removeEventListener('resize', resize)
            cancelAnimationFrame(animationFrameId)
        }
    }, [])

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 pointer-events-none opacity-40"
        />
    )
}

export default Starfield
