import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

const categories = {
  minerals: {
    title: 'Minerals',
    description: 'High-quality industrial minerals essential for ceramic and manufacturing applications',
    image: '/flint-pebbles.jpg',
    products: [
      {
        name: 'Noddle Clay',
        description: 'Premium noddle clay for ceramic applications with excellent plasticity and workability',
        specs: ['High purity', 'Consistent quality', 'Optimal moisture content']
      },
      {
        name: 'Noddle Kaolin',
        description: 'Superior quality kaolin for ceramic body preparation and coating',
        specs: ['Fine particle size', 'High whiteness', 'Low iron content']
      },
      {
        name: 'Silica Sand',
        description: 'Industrial-grade silica sand for various manufacturing processes',
        specs: ['Multiple grain sizes', 'High silica content', 'Low impurities']
      },
      {
        name: 'Talc',
        description: 'High-grade talc for ceramic and industrial applications',
        specs: ['Fine powder form', 'Heat resistant', 'Chemical stability']
      },
      {
        name: 'Special Kaolin',
        description: 'Specialized kaolin grades for specific industrial requirements',
        specs: ['Custom specifications', 'Application optimized', 'Premium quality']
      }
    ]
  },
  oxides: {
    title: 'Oxides',
    description: 'Premium oxide compounds for pigments, catalysts, and industrial processes',
    image: '/ironoxide.jpg',
    products: [
      {
        name: 'Iron Oxide',
        description: 'Premium iron oxide pigments for coloring and industrial applications',
        specs: ['Multiple color grades', 'High tinting strength', 'Weather resistant']
      },
      {
        name: 'Cobalt Oxide',
        description: 'High-purity cobalt oxide for ceramic glazes and pigments',
        specs: ['Technical grade', 'Consistent color', 'High purity']
      },
      {
        name: 'Cobalt Sulphate',
        description: 'Industrial cobalt sulphate for various applications',
        specs: ['Crystalline form', 'High solubility', 'Pharmaceutical grade available']
      },
      {
        name: 'Nickel Oxide',
        description: 'Quality nickel oxide for industrial processes',
        specs: ['Multiple grades', 'High purity', 'Consistent quality']
      },
      {
        name: 'Nickel Sulphate',
        description: 'Industrial nickel sulphate compound',
        specs: ['Battery grade available', 'High purity', 'Stable composition']
      },
      {
        name: 'Selenium Powder',
        description: 'High-quality selenium powder for industrial use',
        specs: ['Fine powder', 'High purity', 'Controlled particle size']
      },
      {
        name: 'Sodium Selenite',
        description: 'Sodium selenite for various industrial applications',
        specs: ['Technical grade', 'High solubility', 'Stable compound']
      },
      {
        name: 'Alumina Oxide',
        description: 'Premium alumina oxide for abrasives and ceramics',
        specs: ['Multiple mesh sizes', 'High hardness', 'Chemical resistant']
      },
      {
        name: 'Aluminium Hydroxide',
        description: 'Industrial aluminium hydroxide compound',
        specs: ['Flame retardant grade', 'High purity', 'Fine particle size']
      }
    ]
  },
  chemicals: {
    title: 'Chemicals',
    description: 'Specialty chemicals and additives for industrial manufacturing processes',
    image: '/magnetite.jpeg',
    products: [
      {
        name: 'Anti-Oxidant',
        description: 'Industrial anti-oxidant compounds for material preservation',
        specs: ['Multiple formulations', 'High effectiveness', 'Stable performance']
      },
      {
        name: 'General Chemicals',
        description: 'Alcohol, IBA, IPA, and other general industrial chemicals',
        specs: ['Technical grade', 'Various concentrations', 'Bulk available']
      },
      {
        name: 'Cleaning Agent for Resin Mould',
        description: 'Specialized cleaning agents for resin mould maintenance',
        specs: ['Effective cleaning', 'Non-corrosive', 'Easy application']
      },
      {
        name: 'Gypsum Additive',
        description: 'Additives for gypsum processing and enhancement',
        specs: ['Performance enhancing', 'Controlled setting time', 'Quality improvement']
      },
      {
        name: 'Specialty Chemical for Green Strength',
        description: 'Advanced chemicals for improving green strength in ceramics',
        specs: ['Enhanced strength', 'Improved handling', 'Reduced defects']
      },
      {
        name: 'Anti-Bacteria',
        description: 'Anti-bacterial compounds for industrial applications',
        specs: ['Broad spectrum', 'Long-lasting', 'Safe formulation']
      },
      {
        name: 'Polymer Product',
        description: 'Industrial polymer products for various applications',
        specs: ['Multiple types', 'Custom formulations', 'Quality assured']
      },
      {
        name: 'Magnetite Washing Grade',
        description: 'Premium magnetite for washing and separation processes',
        specs: ['High density', 'Uniform particle size', 'Recyclable']
      }
    ]
  },
  equipment: {
    title: 'Supporting Equipment',
    description: 'Essential equipment and materials for industrial operations and ceramic manufacturing',
    image: '/siam-ngk-klin.jpg',
    products: [
      {
        name: 'Custom-made Rubber Hoses',
        description: 'Industrial rubber hoses customized for mining and industry',
        specs: ['Various sizes', 'High durability', 'Pressure rated']
      },
      {
        name: 'SiC Heating Elements',
        description: 'Silicon carbide heating elements for high-temperature applications',
        specs: ['High temperature resistant', 'Long lifespan', 'Energy efficient']
      },
      {
        name: 'SiC Ceramic Rollers',
        description: 'Silicon carbide rollers for kiln applications',
        specs: ['Thermal shock resistant', 'High strength', 'Precision manufactured']
      },
      {
        name: 'Kiln Furniture',
        description: 'Comprehensive range including batts, slabs, setters, and saggars',
        specs: ['Multiple materials', 'Custom sizes', 'High temperature rated']
      },
      {
        name: 'Grinding Alumina',
        description: 'High-quality alumina for grinding applications',
        specs: ['Multiple grades', 'Uniform size', 'High hardness']
      },
      {
        name: 'Flint Pebbles',
        description: 'Natural flint pebbles for grinding and milling',
        specs: ['Various sizes', 'High density', 'Wear resistant']
      },
      {
        name: 'Crucible for Mining Lab',
        description: 'Laboratory crucibles for mining and metallurgical applications',
        specs: ['High temperature rated', 'Chemical resistant', 'Precise dimensions']
      }
    ]
  },
  machinery: {
    title: 'Machinery (SETEC - Vicentini)',
    description: 'Advanced ceramic industry equipment and automated manufacturing systems',
    image: '/lucky1.jpg',
    products: [
      {
        name: 'Ceramic Industry Equipment',
        description: 'Complete equipment solutions for ceramic manufacturing',
        specs: ['Turnkey solutions', 'Latest technology', 'Full support']
      },
      {
        name: 'Kiln Systems',
        description: 'Industrial kilns for ceramic firing processes',
        specs: ['Energy efficient', 'Precise temperature control', 'Various capacities']
      },
      {
        name: 'Ball Mill',
        description: 'Industrial ball mills for grinding and mixing',
        specs: ['Multiple sizes', 'Continuous operation', 'Low maintenance']
      },
      {
        name: 'Extruder',
        description: 'Ceramic extruders for shaping and forming',
        specs: ['High precision', 'Automated control', 'Various configurations']
      },
      {
        name: 'Automatic/Robotic Machinery',
        description: 'Automated systems for ceramic production',
        specs: ['Labor reduction', 'Consistent quality', 'High productivity']
      }
    ]
  }
};

export const load: PageLoad = ({ params }) => {
  const category = categories[params.category as keyof typeof categories];
  
  if (!category) {
    throw error(404, 'Product category not found');
  }
  
  return {
    category: params.category,
    ...category
  };
};
