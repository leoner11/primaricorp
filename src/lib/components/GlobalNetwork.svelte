<script lang="ts">
  import { onMount } from 'svelte';
  
  let canvas: HTMLCanvasElement;
  let animationId: number;

  interface Node {
    x: number;
    y: number;
    radius: number;
    pulsePhase: number;
  }

  interface Connection {
    from: Node;
    to: Node;
  }

  interface Pulse {
    connection: Connection;
    progress: number;
    speed: number;
  }

  let centerNode: Node;
  let outerNodes: Node[] = [];
  let connections: Connection[] = [];
  let pulses: Pulse[] = [];

  function createNodes(width: number, height: number) {
    const centerX = width / 2;
    const centerY = height / 2;

    // Central hub (Primari Corpora)
    centerNode = {
      x: centerX,
      y: centerY,
      radius: 12,
      pulsePhase: 0
    };

    // 8 outer nodes (representing 8 countries/partners)
    outerNodes = [];
    const numNodes = 8;
    const radius = Math.min(width, height) * 0.35;

    for (let i = 0; i < numNodes; i++) {
      const angle = (i / numNodes) * Math.PI * 2 - Math.PI / 2;
      outerNodes.push({
        x: centerX + Math.cos(angle) * radius,
        y: centerY + Math.sin(angle) * radius,
        radius: 6,
        pulsePhase: Math.random() * Math.PI * 2
      });
    }

    // Create connections from center to each outer node
    connections = outerNodes.map(node => ({
      from: centerNode,
      to: node
    }));

    // Initialize some pulses
    pulses = [];
    for (let i = 0; i < 12; i++) {
      pulses.push({
        connection: connections[Math.floor(Math.random() * connections.length)],
        progress: Math.random(),
        speed: 0.003 + Math.random() * 0.002
      });
    }
  }

  function drawNode(ctx: CanvasRenderingContext2D, node: Node, isCenter: boolean = false) {
    // Pulsing glow effect
    const pulseSize = Math.sin(node.pulsePhase) * 3 + 3;
    
    // Outer glow
    const gradient = ctx.createRadialGradient(
      node.x, node.y, 0,
      node.x, node.y, node.radius + pulseSize
    );
    
    if (isCenter) {
      gradient.addColorStop(0, 'rgba(245, 158, 11, 0.8)'); // Gold
      gradient.addColorStop(0.5, 'rgba(245, 158, 11, 0.3)');
      gradient.addColorStop(1, 'rgba(245, 158, 11, 0)');
    } else {
      gradient.addColorStop(0, 'rgba(245, 158, 11, 0.6)');
      gradient.addColorStop(0.5, 'rgba(245, 158, 11, 0.2)');
      gradient.addColorStop(1, 'rgba(245, 158, 11, 0)');
    }
    
    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.arc(node.x, node.y, node.radius + pulseSize, 0, Math.PI * 2);
    ctx.fill();

    // Core node
    ctx.fillStyle = isCenter ? '#F59E0B' : '#D97706';
    ctx.beginPath();
    ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
    ctx.fill();

    // Inner highlight
    ctx.fillStyle = 'rgba(255, 255, 255, 0.3)';
    ctx.beginPath();
    ctx.arc(node.x - node.radius * 0.3, node.y - node.radius * 0.3, node.radius * 0.4, 0, Math.PI * 2);
    ctx.fill();
  }

  function drawConnection(ctx: CanvasRenderingContext2D, connection: Connection) {
    // Draw line
    ctx.strokeStyle = 'rgba(245, 158, 11, 0.15)';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(connection.from.x, connection.from.y);
    ctx.lineTo(connection.to.x, connection.to.y);
    ctx.stroke();
  }

  function drawPulse(ctx: CanvasRenderingContext2D, pulse: Pulse) {
    const { from, to } = pulse.connection;
    const x = from.x + (to.x - from.x) * pulse.progress;
    const y = from.y + (to.y - from.y) * pulse.progress;

    // Glow
    const gradient = ctx.createRadialGradient(x, y, 0, x, y, 8);
    gradient.addColorStop(0, 'rgba(245, 158, 11, 0.8)');
    gradient.addColorStop(0.5, 'rgba(245, 158, 11, 0.4)');
    gradient.addColorStop(1, 'rgba(245, 158, 11, 0)');
    
    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.arc(x, y, 8, 0, Math.PI * 2);
    ctx.fill();

    // Core pulse
    ctx.fillStyle = '#FBBF24';
    ctx.beginPath();
    ctx.arc(x, y, 3, 0, Math.PI * 2);
    ctx.fill();
  }

  function animate() {
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Update pulse phases
    centerNode.pulsePhase += 0.02;
    outerNodes.forEach(node => {
      node.pulsePhase += 0.015;
    });

    // Draw connections
    connections.forEach(connection => {
      drawConnection(ctx, connection);
    });

    // Update and draw pulses
    pulses.forEach(pulse => {
      pulse.progress += pulse.speed;
      
      // Reset pulse when it reaches the end
      if (pulse.progress >= 1) {
        pulse.progress = 0;
        pulse.connection = connections[Math.floor(Math.random() * connections.length)];
        pulse.speed = 0.003 + Math.random() * 0.002;
      }

      drawPulse(ctx, pulse);
    });

    // Draw nodes
    outerNodes.forEach(node => {
      drawNode(ctx, node, false);
    });
    drawNode(ctx, centerNode, true);

    animationId = requestAnimationFrame(animate);
  }

  function handleResize() {
    if (!canvas) return;
    
    const container = canvas.parentElement;
    if (!container) return;

    canvas.width = container.clientWidth;
    canvas.height = container.clientHeight;
    
    createNodes(canvas.width, canvas.height);
  }

  onMount(() => {
    handleResize();
    animate();

    window.addEventListener('resize', handleResize);

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
      window.removeEventListener('resize', handleResize);
    };
  });
</script>

<div class="relative w-full h-full bg-gradient-to-br from-charcoal-900 via-charcoal-800 to-charcoal-900">
  <!-- Canvas for network -->
  <canvas
    bind:this={canvas}
    class="absolute inset-0 w-full h-full"
  />
  
  <!-- Subtle radial gradient overlay for depth -->
  <div class="absolute inset-0 bg-radial-gradient from-transparent via-transparent to-charcoal-900/40 pointer-events-none"></div>
</div>

<style>
  canvas {
    image-rendering: crisp-edges;
  }
  
  .bg-radial-gradient {
    background: radial-gradient(circle at center, transparent 0%, transparent 50%, rgba(10, 10, 10, 0.4) 100%);
  }
</style>
